import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {

  heroes :Hero[]

  hero :Hero;

  constructor(private router :Router, private heroService: HeroServiceService) { }

  ngOnInit() {
      this.initHeroes()
  }

  private initHeroes() {
    this.heroService.getHeroes().subscribe( res => this.heroes = res)
  }

  goToEditPage() {
    this.router.navigate(['/HeroEdit/' + this.hero.id])
  }

  showHero(toShowHero :Hero){
    this.hero = toShowHero
  }


}
