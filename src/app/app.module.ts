import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imported to use two-way binding
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  // external modules used by the app
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
