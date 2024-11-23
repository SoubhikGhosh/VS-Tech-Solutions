import { Component, ViewChild } from "@angular/core";
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ngbd-carousel-pause",
  standalone: true,
  imports: [NgbCarouselModule, FormsModule, CommonModule],
  templateUrl: "./carousel-pause.html",
  styleUrl: './carousel-pause.scss'

})
export class NgbdCarouselPause {
  carouselItems = [
    {
      image: "/assets/images/FE_Tech.png",
      heading: "Frontend Development",
      content: "This is the content for slide 1",
    },
    {
        image: "/assets/images/FE_Tech.png",
        heading: "Backend Development",
        content: "This is the content for slide 2",
      }
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild("carousel", { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
