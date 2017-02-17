import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router } from '@angular/router';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
 })
// if we implement the Angular ngOnInit Lifecycle Hook, then Angular
// is going to call the method ngOnInit at the appropiate time
export class HeroesComponent implements OnInit {
  // ts infers the type from the array
  heroes : Hero[];
  selectedHero: Hero;

  // the constructor defines a private property where the instace
  // of HeroService will be injected
  constructor(
    private heroService: HeroService, 
    private router: Router) { }

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

  gotoDetail(): void {
    this.router.navigate([ '/detail', this.selectedHero.id]);
  }
}
