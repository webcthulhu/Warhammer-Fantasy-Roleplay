import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainRoutingModule} from './main-routing.module';
import {IndexComponent} from './index/index.component';
import {CharacterCreationComponent} from './character-creation/character-creation.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    IndexComponent,
    CharacterCreationComponent
  ]
})
export class MainModule {
}
