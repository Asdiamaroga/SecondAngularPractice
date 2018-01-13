import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero'
import { HeroServiceService } from '../hero-service.service'
import { Router } from '@angular/router';
import { Subject }    from 'rxjs/Subject';
import { debounce } from 'rxjs/operators/debounce';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm = new Subject<string>()
  resultList$ :Observable<Hero[]>

  constructor(private heroService :HeroServiceService, private router :Router) { }

  ngOnInit() {
    this.resultList$ = this.searchTerm.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap( (term :string) => this.heroService.searchForHero(term) )
    )
  }

  searchForHeroes(searchTerm :string) {
    this.searchTerm.next(searchTerm)
  }

  goToEditPage(hero :Hero) {
    console.log(hero)

    //this.router.navigate(['/HeroEdit/' + hero.id])
  }
}
