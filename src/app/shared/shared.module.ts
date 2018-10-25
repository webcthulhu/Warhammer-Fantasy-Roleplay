import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeUrlPipe} from './pipes/safe-url.pipe';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {SafeStylePipe} from './pipes/safe-style.pipe';
import {JoinPipe} from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SafeUrlPipe,
    SafeHtmlPipe,
    SafeStylePipe,
    JoinPipe
  ],
  declarations: [
    SafeUrlPipe,
    SafeHtmlPipe,
    SafeStylePipe,
    JoinPipe
  ]
})
export class SharedModule {
}
