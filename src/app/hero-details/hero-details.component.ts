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

  goAndAddNewHero(){
    this.router.navigate(['/HeroEdit/New'])
  }

  deleteHero() {
    if(this.hero) {
      this.heroService.deleteHero(this.hero).subscribe( _ => this.initHeroes() )
    }
  }

  showHero(toShowHero :Hero){
    this.hero = toShowHero
  }


}
