import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongsPageComponent } from './songsPage/songsPage.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';

var config = {
  apiKey: "AIzaSyAsNWTn3cRegx0VGi50kGIHFF3ocfH8cWo",
  authDomain: "webtechproject-5ceb9.firebaseapp.com",
  databaseURL: "https://webtechproject-5ceb9.firebaseio.com",
  projectId: "webtechproject-5ceb9",
  storageBucket: "webtechproject-5ceb9.appspot.com",
  messagingSenderId: "1043029727779"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SongsPageComponent]
})
export class AppModule { }
