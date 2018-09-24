import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarConfig,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule ,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CommonModule} from '@angular/common';
import {DisableDivDirective} from './disable-div.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatMenuModule, MatTooltipModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule,
  MatTabsModule, MatSelectModule, MatChipsModule,
  MatAutocompleteModule, MatDatepickerModule, MatProgressSpinnerModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DisableDivDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
