import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  private heroes :Hero[]
  topFourHeroes :Hero[]

  constructor(private heroService :HeroServiceService, private router :Router) { }

  ngOnInit() {
      this.heroService.getHeroes().subscribe( res => {
          this.heroes = res
          this.getTheTopFourHeroes()
        }
      )
      
  }

  goToEditPage(id :number) {
    this.router.navigate(['/HeroEdit/' + id])
  }

  private getTheTopFourHeroes(){
      this.heroes.sort( ((a :Hero ,b :Hero) => {
          if (a.power < b.power)
            return -1;
          if (a.power > b.power)
            return 1;
          return 0;
        })
      )
      this.topFourHeroes = Object.assign([], this.heroes)
      this.topFourHeroes.splice(4)
  }

}
