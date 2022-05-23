import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  /** Service injection
   * The parameter simultaneously defines a private heroService 
   * property and identifies it as a HeroService injection site.
   * When Angular creates a HeroesComponent, 
   * the Dependency Injection system sets the heroService parameter 
   * to the singleton instance of HeroService.
   */
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

}
