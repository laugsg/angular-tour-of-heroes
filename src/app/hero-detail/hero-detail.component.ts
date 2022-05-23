import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

/** ActivatedRoute
 * Holds information about the route to an instance of the current Component. 
 * This component is interested in the route's parameters extracted from the URL. 
 * The "id" parameter is the id of the hero to display.
 */
import { ActivatedRoute } from '@angular/router';
/** location
 * An service for interacting with the browser. 
 * to navigate back to the view that navigated here.
 */
import { Location } from '@angular/common';
/** HeroService
 * Gets hero data from the remote server and this component will use it to get the hero-to-display.
 */
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  /**
   * The route.snapshot is a static image of the route information shortly after the component was created.
   * The paramMap is a dictionary of route parameter values extracted from the URL. 
   * The "id" key returns the id of the hero to fetch. Route parameters are always strings. 
   * The JavaScript Number function converts the string to a number, which is what a hero id should be.
   */
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

}
