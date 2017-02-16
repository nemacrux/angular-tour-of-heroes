import { Component }  from '@angular/core';
import { OnInit }     from '@angular/core';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
    <h2>My Heroes</h2>
      <ul class="heroes">

        <!-- The (*) prefix to ngFor indicates that the <li> element and its children 
        constitute a master template. For the event binding: The parenthesis identify 
        the <li> element’s click event as the target -->

        <li *ngFor="let hero of heroes" 
          [class.selected]="hero === selectedHero" 
          (click) = "onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>

      <!-- Notice that the hero property is the target of a property binding — 
      it's in square brackets to the left of the (=).-->

      <my-hero-detail [hero]="selectedHero"></my-hero-detail>      
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
 })
// if we implement the Angular ngOnInit Lifecycle Hook, then Angular
// is going to call the method ngOnInit at the appropiate time
export class HeroesComponent implements OnInit {
  // ts infers the type from the array
  heroes : Hero[];
  selectedHero: Hero;

  // the constructor defines a private property where the instace
  // of HeroService will be injected
  constructor(private heroService: HeroService) { }

  // this method is called by Angular
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}