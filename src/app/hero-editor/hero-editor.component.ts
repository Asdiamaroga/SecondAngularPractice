import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss']
})
export class HeroEditorComponent implements OnInit {

  originalHero :Hero
  heroToBeEdited :Hero
  randomText :string = ""
  heroOverViewLabelText = "Original Hero information: "
 

  constructor(private activatedRoute :ActivatedRoute, 
              private heroService :HeroServiceService, 
              private locationService :Location) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe( res => {
              this.heroService.getHeroWithId(res.id).subscribe( returnedHero => {
                  this.originalHero = returnedHero
                  this.heroToBeEdited =  Object.assign({}, this.originalHero)
                }
              )           
         }
      )
  }

  saveHeroChanges() {
      this.locationService.back()
      this.originalHero.id = this.heroToBeEdited.id
      this.originalHero.name = this.heroToBeEdited.name
      this.originalHero.power = this.heroToBeEdited.power
  }
}
