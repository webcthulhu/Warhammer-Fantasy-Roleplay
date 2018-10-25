import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {CharacterCreationComponent} from './character-creation/character-creation.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'create', component: CharacterCreationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
