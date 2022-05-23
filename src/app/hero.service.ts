import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/** Get hero data
 * The HeroService could get hero data 
 * from anywhere —a web service, local storage, or a mock data source.
 * Removing data access from components means you can change your mind 
 * about the implementation anytime, without touching any components. 
 * They don't know how the service works.
 */

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /**
   * This is a typical "service-in-service" scenario: 
   * MessageService is injected into the HeroService 
   * which is injected into the HeroesComponent.
   */
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /** getHero
   * @returns {Observable<Hero[]>}
   * @NOTE:
   * For now, assume that a hero with the specified `id` always exists.
   * Error handling will be added in the next step of the tutorial.
   */
  getHero(id:Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero)
  }

}
