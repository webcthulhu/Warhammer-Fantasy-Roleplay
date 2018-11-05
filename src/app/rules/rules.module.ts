import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RulesRoutingModule} from './rules-routing.module';
import {CareersComponent} from './careers/careers.component';
import {IndexComponent} from './index/index.component';
import {QualitiesComponent} from './qualities/qualities.component';
import {ConditionsComponent} from './conditions/conditions.component';
import {TalentsComponent} from './talents/talents.component';
import {SkillsComponent} from './skills/skills.component';
import {TrappingsComponent} from './trappings/trappings.component';


@NgModule({
  imports: [
    SharedModule,
    RulesRoutingModule
  ],
  declarations: [
    CareersComponent,
    IndexComponent,
    QualitiesComponent,
    ConditionsComponent,
    TalentsComponent,
    SkillsComponent,
    TrappingsComponent
  ]
})
export class RulesModule {
}
