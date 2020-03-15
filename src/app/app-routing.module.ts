import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppAlbumsComponent } from './app-albums/app-albums.component';


const routes: Routes = [
  { path: 'users', component: AppUsersComponent },
  { path: 'albums', component: AppAlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
