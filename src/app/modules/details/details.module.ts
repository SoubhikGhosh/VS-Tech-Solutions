import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details/details.component";
import { BaseModule } from "../base/base.module";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [DetailsComponent, ContactComponent],
  imports: [
    CommonModule,
    BaseModule,
  ],
})
export class DetailsModule {}
