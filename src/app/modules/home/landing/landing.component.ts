import { Component, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.scss",
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateWithFade(container: HTMLDivElement) {
    container.classList.add("fade-out");
    setTimeout(() => {
      this.router.navigate(["/details"]);
    }, 800);
  }
}
