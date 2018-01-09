import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice', power: 1},
      { id: 12, name: 'Narco', power: 2},
      { id: 13, name: 'Bombasto', power: 3},
      { id: 14, name: 'Celeritas', power: 4},
      { id: 15, name: 'Magneta', power: 5},
      { id: 16, name: 'RubberMan', power: 6},
      { id: 17, name: 'Dynama', power: 7},
      { id: 18, name: 'Dr IQ', power: 8},
      { id: 19, name: 'Magma', power: 9},
      { id: 20, name: 'Tornado', power: 40}
    ];

    return {HEROES}
  }

}
