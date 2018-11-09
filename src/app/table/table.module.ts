import {NgModule} from '@angular/core';

import {TableRoutingModule} from './table-routing.module';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '@app/shared/shared.module';
import { CanvasComponent } from './canvas/canvas.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  imports: [
    SharedModule,
    TableRoutingModule
  ],
  declarations: [
    IndexComponent,
    CanvasComponent,
    OptionsComponent
  ]
})
export class TableModule {
}
