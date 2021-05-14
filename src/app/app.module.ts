import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTable, MatHeaderRowDef } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTable, MatHeaderRowDef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
