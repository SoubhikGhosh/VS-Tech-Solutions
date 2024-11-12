import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BaseModule } from "../base/base.module";



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    BaseModule
],
  exports: [
    LandingComponent
  ]
})
export class HomeModule { }
