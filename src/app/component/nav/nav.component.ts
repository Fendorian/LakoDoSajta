import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //Scrolling mouse
    $(".navbar a, .btn").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html").animate(
          {
            scrollTop: $(hash).offset().top - 284
          },
          800
        );
      }
    });
    //Scroll spy

    //Opacity sticky
    window.addEventListener("scroll", function() {
      if (window.scrollY > 150) {
        document.querySelector(".navbar").style.opacity = 0.7;
      } else {
        document.querySelector(".navbar").style.opacity = 1;
      }
    });
  }
}
