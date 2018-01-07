import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss']
})
export class HeroEditorComponent implements OnInit {

  private _originalHero :Hero
  heroToBeEdited :Hero = {
      id: 0,
      name: "",
      power: 0
  }
  randomText :string = ""
 

  constructor(private activatedRoute :ActivatedRoute, private heroService :HeroServiceService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe( res => {
              this._originalHero = this.heroService.getHeroWithId(res.id)
              this.heroToBeEdited =  Object.assign({}, this._originalHero)
         }
      )
  }

}
