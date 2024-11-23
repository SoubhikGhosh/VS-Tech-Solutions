import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { ContactComponent } from './contact/contact.component';
import { MottoComponent } from './motto/motto.component';
import { AimComponent } from './aim/aim.component';
import { DetailsComponent } from './details.component';
import { NgbdCarouselPause } from './carousel/carousel-pause';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [DetailsComponent, ContactComponent, MottoComponent, AimComponent, TechComponent],
  imports: [
    CommonModule,
    BaseModule,
    NgbdCarouselPause,
  ],
})
export class DetailsModule {}
