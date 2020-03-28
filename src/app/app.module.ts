import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { IeltsContentComponent } from './landing-page/ielts-content/ielts-content.component';
import { PteContentComponent } from './landing-page/pte-content/pte-content.component';
import { CelpipContentComponent } from './landing-page/celpip-content/celpip-content.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    IeltsContentComponent,
    PteContentComponent,
    CelpipContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
