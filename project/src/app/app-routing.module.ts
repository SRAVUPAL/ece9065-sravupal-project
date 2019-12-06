import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HpotterComponent } from './hpotter/hpotter.component';
import { GotComponent } from './got/got.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hpotter', component: HpotterComponent },
  { path: 'got', component: GotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
