import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
// imported to use two-way binding
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }     from './app-routing.module'; 

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component'
import { HeroService }          from './hero.service';


@NgModule({
  // external modules used by the app
  imports: [ 
    BrowserModule,
    FormsModule,
    /* We use the forRoot method because we're providing a configured router 
    at the root of the application. The forRoot method gives us the Router 
    service providers and directives needed for routing, and performs the 
    initial navigation based on the current browser URL. */
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  /* This array contains the list of all components, pipes, and directives 
  that we created and that belong in our application's module. */
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  /* let angular to inject an instance of HeroService. It's a singleton instance
  available to all the components of the app */
  providers: [ HeroService ]
})

export class AppModule { }
