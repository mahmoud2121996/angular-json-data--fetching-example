import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAlbumsComponent } from './app-albums/app-albums.component';
import { AppUsersComponent } from './app-users/app-users.component';

import { GetAlbumsService } from './get-albums.service';
import { GetUsersService } from './get-users.service';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './app-header/app-header.component';
@NgModule({
  declarations: [
    AppComponent,
    AppAlbumsComponent,
    AppUsersComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetAlbumsService, GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
