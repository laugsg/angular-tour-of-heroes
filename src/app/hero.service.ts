import { Injectable } from '@angular/core';
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

  getHeroes(): Hero[] {
    return HEROES
  }

  constructor() { }
}
