import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    AppComponent
  ],providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
