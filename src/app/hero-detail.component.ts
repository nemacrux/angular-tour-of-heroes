import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    // the selector name identifies this component
    selector: 'my-hero-detail',
    template:`
        <!-- ngIf and ngFor are called “structural directives” because they can change the 
        structure of portions of the DOM. -->

        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <!-- ngModel built-in directive for two-way binding -->
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        <div>
    `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}