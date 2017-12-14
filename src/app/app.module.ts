import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import { JustgageModule } from 'angular2-justgage';

import 'hammerjs';
import { VisualComponent } from './visual/visual.component';
import { JustgageComponent } from './justgage/justgage.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualComponent,
    JustgageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MdSlideToggleModule,
    MdInputModule,
    MdCardModule,
    FormsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdSliderModule,
    NoopAnimationsModule,
    JustgageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
