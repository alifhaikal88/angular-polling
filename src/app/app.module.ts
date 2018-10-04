import { HomeComponent } from './../home/home.component';
import { AppRoutingModule } from './app-route.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DisableDivDirective } from './disable-div.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatDialogModule
];

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      DisableDivDirective,
      MyDialogComponent,
      HomeComponent
   ],
   imports: [
      AppRoutingModule,
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MATERIAL_MODULES,
      FormsModule
   ],
   entryComponents: [
      MyDialogComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
