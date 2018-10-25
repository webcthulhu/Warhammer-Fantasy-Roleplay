import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule'},
  {path: 'main', loadChildren: 'src/app/main/main.module#MainModule'},
  {path: 'map', loadChildren: 'src/app/map/map.module#MapModule'},
  {path: 'rules', loadChildren: 'src/app/rules/rules.module#RulesModule'},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
