import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongsPageComponent } from './songsPage/songsPage.component';
import { ReviewComponent } from './reviewComponent/reviewComponent.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { NewSongComponent } from './newSong/newSong.component';
import { PlaylistComponent } from './playlistComponent/playlistComponent.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule,
  MatFormField
} from '@angular/material';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'songsPage', component: SongsPageComponent },
  { path: 'reviewComponent', component: ReviewComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'addSong', component: NewSongComponent },
  { path: 'playlist', component: PlaylistComponent }
]

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
    LoginPageComponent,
    ReviewComponent,
    NewSongComponent,
    PlaylistComponent
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
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [LoginPageComponent,AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [ReviewComponent, NewSongComponent]
})
export class AppModule { }
