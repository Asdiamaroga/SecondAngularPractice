import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'

@Injectable()
export class HeroServiceService {

  constructor(private messageService :MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.sendSystemMessage("Hearoes READ")
    return of(HEROES)
  }

  getHeroWithId(id :number){
    this.sendSystemMessage("Retrieved :" + id)
    return HEROES.find( (hero => hero.id == id) )
  }

  private sendSystemMessage(message :string){
    this.messageService.addMessage(message)
  }

}
