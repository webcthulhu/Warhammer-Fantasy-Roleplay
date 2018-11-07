import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule'},
  {path: 'main', loadChildren: 'src/app/main/main.module#MainModule'},
  {path: 'maps', loadChildren: 'src/app/maps/maps.module#MapsModule'},
  {path: 'rules', loadChildren: 'src/app/rules/rules.module#RulesModule'},
  {path: 'table', loadChildren: 'src/app/table/table.module#TableModule'},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
