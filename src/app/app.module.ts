import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
// imported to use two-way binding
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

@NgModule({
  // external modules used by the app
  imports: [ 
    BrowserModule,
    FormsModule
  ],

  // This array contains the list of all components, pipes, and directives 
  // that we created and that belong in our application's module.
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  bootstrap: [ AppComponent ],
  // let angular to inject a new instance of HeroService
  providers: [ HeroService ]
})
export class AppModule { }
