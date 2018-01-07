import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {
    path:'',
    component: HeroesComponent
  },
  {
    path:'HeroDetails',
    component: HeroDetailsComponent
  },
  {
    path: 'HeroEdit/:id',
    component: HeroEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
