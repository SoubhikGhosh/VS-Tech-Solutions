import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/home/landing/landing.component';
import { DetailsComponent } from './modules/details/details.component';

const routes: Routes = [
  {path:"", component: LandingComponent},
  {path:"details", component: DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
