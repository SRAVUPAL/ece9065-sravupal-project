import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../service/authentication.service';
import { AppComponent } from '../app.component';
import { InteractionService } from '../interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent {

  title = 'firebaseLogin';

  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;
  allUsers: Object;
  userClass = "user";

  constructor(
    private authService: AuthenticationService,
    private _http: HttpService,
    private _interactionService: InteractionService,
    private router: Router) {
    this.selectedVal = 'login';
    this.isForgotPassword = false;
  }

  // Comman Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = "";
    }, 2000);
  }

  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In!");
        this.isUserLoggedIn();
        this.checkUser();
        this.hidePage();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Register user with  provided Email/ Password
  registerUser() {
    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {

        // Send Varification link in email
        this.authService.sendEmailVerification().then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Registration Successful! Please Verify Your Email");
        }, err => {
          this.showMessage("danger", err.message);
        });
        this.isUserLoggedIn();


      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Send link on given email to reset password
  forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
      .then(res => {
        console.log(res);
        this.isForgotPassword = false;
        this.showMessage("success", "Please Check Your Email");
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Open Popup to Login with Google Account
  googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In with Google");
        this.isUserLoggedIn();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  checkUser() {
    this._http.getUsers().subscribe((data: any[]) => {
      this.allUsers = data;
      let t, e;
      for (let user of Object.keys(this.allUsers)) {
        t = this.allUsers[user].token;
        e = this.allUsers[user].userid;
        if (t == "user") {
          console.log(t + "navigation success");
          this.router.navigate(['userSongComponent']);
        }
      }
      // console.log(this.userClass);
      this._interactionService.sendToken(this.emailInput);
    });
  }
  hidePage() {
    if (this.userClass == "admin" || this.userClass == "user") {
      console.log(this.userClass);
    };
  }
}