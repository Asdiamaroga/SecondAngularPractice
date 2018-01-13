import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,  } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroServiceService {

  private _heroesUrl = 'api/HEROES'
  private _cashedHeroesData = []
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private messageService :MessageService, private http :HttpClient) { }

  getHeroes() :Observable<Hero[]>{
    this.sendSystemMessage("Hearoes READ")
    return this.http.get<Hero[]>(this._heroesUrl)
  }

  getHeroWithId(id :number) :Observable<Hero>{
    let urlToGetHero = `${this._heroesUrl}/${id}`;
    return this.http.get<Hero>(urlToGetHero).pipe(
        tap( _ => this.sendSystemMessage(" OMG we got the HERO "))
    )
  }

  updateHero(hero :Hero): Observable<any> {
    return this.http.put(this._heroesUrl, hero, this._httpOptions).pipe(
      tap( _ => this.sendSystemMessage("UPDATED HERO"))
    )
  }

  addhero(hero :Hero): Observable<any> {
    return this.http.post(this._heroesUrl, hero, this._httpOptions).pipe(
      tap( (addedHero :Hero) => this.sendSystemMessage("Added hero with <" + addedHero.id + ">"))
    )
  }

  deleteHero(hero :Hero) :Observable<any>{
    let urlTodeleteHero = `${this._heroesUrl}/${hero.id}`;
    let response = this.http.delete(urlTodeleteHero, this._httpOptions).pipe(
      tap( (addedHero :Hero) => this.sendSystemMessage("Deleted hero with <" + hero.id + ">"))
    )
    return response
  }

  searchForHero(term :string) :Observable<Hero[]>{
      if(!term.trim()) {
        return of( [] )
      }
      let urlForSearching = `${this._heroesUrl}/?name=${term}`;
      return this.http.get<Hero[]>(urlForSearching).pipe(
        tap( _ => this.sendSystemMessage("Search Results returned for <" + term.trim() + ">"))
      )

  }

  private sendSystemMessage(message :string){
    this.messageService.addMessage(message)
  }

}
