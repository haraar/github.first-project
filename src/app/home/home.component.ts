import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "Welcome to Hakim home !";
  salary = 10000;
  constructor() {}

  ngOnInit(): void {}
  sayHello(name: any) {
    alert("Hello " + name);
  }
}
