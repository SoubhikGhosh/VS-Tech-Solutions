import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseModule } from "../base/base.module";
import { ContactComponent } from './contact/contact.component';
import { MottoComponent } from './motto/motto.component';
import { AimComponent } from './aim/aim.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from "./details.component";

@NgModule({
  declarations: [DetailsComponent, ContactComponent, MottoComponent, AimComponent, PeopleComponent],
  imports: [
    CommonModule,
    BaseModule,
  ],
})
export class DetailsModule {}
