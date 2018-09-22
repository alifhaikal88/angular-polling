import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CommonModule} from '@angular/common';
import { DisableDivDirective } from './disable-div.directive';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DisableDivDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
