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
  styleUrl: "./carousel-pause.scss",
})
export class NgbdCarouselPause {
  @ViewChild("carousel", { static: true }) carousel!: NgbCarousel;

  carouselItems = [
    {
      image: "/assets/images/FE_Tech.png",
      heading: "Frontend Development",
      content: "Unleash the power of modern frontend development with VS Tech Solutions. Mastering ReactJS, Angular, TypeScript, and more, we deliver sleek, responsive, and visually captivating websites tailored to elevate your brand. Let cutting-edge technology and limitless creativity bring your digital vision to life.",
    },
    {
      image: "/assets/images/BE_Tech.png",
      heading: "Backend Development",
      content: "Transform your digital solutions with VS Tech Solutions' backend expertise. Leveraging Java, Python, Node.js, MySQL, and MongoDB, we craft secure, scalable architectures. With cutting-edge APIs and database solutions, we ensure seamless, high-performance experiences skillfully tailored to your exact needs.",
    },
    {
      image: "/assets/images/UX_Tech.png",
      heading: "UI/UX Development",
      content: "Revolutionize user experiences with VS Tech Solutions' UI/UX design expertise. Leveraging Figma, Adobe XD, and cutting-edge methodologies like user-centric design, micro-interactions, and responsive prototyping, we craft intuitive, visually compelling interfaces that captivate and engage seamlessly.",
    },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

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
