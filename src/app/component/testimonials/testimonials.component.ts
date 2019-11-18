import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick-theme.css";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".slider").slick({
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1
    });
  }
}
