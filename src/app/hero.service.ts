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

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /**
   * This is a typical "service-in-service" scenario: 
   * MessageService is injected into the HeroService 
   * which is injected into the HeroesComponent.
   */
  constructor(private messageService: MessageService) { }
}
