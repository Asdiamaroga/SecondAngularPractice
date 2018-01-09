import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroServiceService {

  private _heroesUrl = 'api/HEROES'; 
  private _cashedHeroesData = [];


  constructor(private messageService :MessageService, private http: HttpClient) { }

  getHeroes() :Observable<Hero[]>{
    this.sendSystemMessage("Hearoes READ")
    let streamOfData :Observable<Hero[]> = this.http.get<Hero[]>(this._heroesUrl)
    streamOfData.subscribe( returnedHeroes => this._cashedHeroesData = returnedHeroes)
    return streamOfData
  }

  getHeroWithId(id :number) :Observable<Hero>{
    this.sendSystemMessage("Retrieved :" + id)
    return of(this._cashedHeroesData.find( hero => hero.id == id ))
  }

  private sendSystemMessage(message :string){
    this.messageService.addMessage(message)
  }

}
