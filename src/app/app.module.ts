import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    PlayerFormComponent
  ],providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
