import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongsPageComponent } from './songsPage/songsPage.component';
import { GotComponent } from './got/got.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'songsPage', component: SongsPageComponent },
  { path: 'got', component: GotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
