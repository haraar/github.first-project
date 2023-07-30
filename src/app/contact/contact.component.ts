import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <h2>contact</h2>
    <a routerLink="add">Add contact</a>
    <br />
    <a routerLink="edit/1">Edit contact</a>

    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
