import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details-directive',
  templateUrl: './hero-details-directive.component.html',
  styleUrls: ['./hero-details-directive.component.scss'],
})


export class HeroDetailsDirectiveComponent implements OnInit {

  @Input() labelText :string = "Hero Details:"
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
