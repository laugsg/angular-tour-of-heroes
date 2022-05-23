import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// data
import { HEROES } from '../mock-heroes';

// @Component decorator specifies 
// the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero: don't assign any value to it 
  // since there is no selected hero when the application starts.
  selectedHero?: Hero

  // onSelect(): assigns the clicked hero from the template
  // to the component's selectedHero.
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
