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
  heroToBeEdited :Hero = {
    id:0,
    power: 0,
    name: ""
  }
  creatingNewHero :boolean
  heroOverViewLabelText = "Original Hero information: "
 

  constructor(private activatedRoute :ActivatedRoute, 
              private heroService :HeroServiceService, 
              private locationService :Location) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe( res => {
              if(res.id == 'New'){
                this.creatingNewHero = true
              } else {
                this.heroService.getHeroWithId(res.id).subscribe( returnedHero => {
                    this.originalHero = returnedHero
                    this.heroToBeEdited =  Object.assign({}, this.originalHero)
                  }
                )           
              }
              
         }
      )
  }

  saveHeroChanges() {
      let eventStream;
      if(this.creatingNewHero){
        eventStream = this.heroService.addhero(this.heroToBeEdited)
      } else {
        eventStream = this.heroService.updateHero(this.heroToBeEdited)
      }
      eventStream.subscribe( _ =>
        this.locationService.back()
      )
  }
}
