import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MapsRoutingModule} from './maps-routing.module';
import {IndexComponent} from './index/index.component';
import {MapComponent} from './map/map.component';

@NgModule({
  imports: [
    SharedModule,
    MapsRoutingModule
  ],
  declarations: [
    IndexComponent,
    MapComponent
  ]
})
export class MapsModule {
}
