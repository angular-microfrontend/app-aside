import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app-aside";
  links = [];

  ngOnInit() {
    if (window.localStorage && window.localStorage.getItem("links")) {
      this.links = JSON.parse(window.localStorage.getItem("links"));
    }
    console.log(this.links);
  }
}
