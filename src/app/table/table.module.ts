import {NgModule} from '@angular/core';

import {TableRoutingModule} from './table-routing.module';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TableRoutingModule
  ],
  declarations: [IndexComponent]
})
export class TableModule {
}
