import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BaseModule } from "../base/base.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
],
  exports: [
    LandingComponent
  ]
})
export class HomeModule { }
