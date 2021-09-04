import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHtml]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="img" alt="icon">
      <input type="text" [value]="name">

      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Vlad';
  img: string = 'assets/img/goodbye.jpg';

  constructor() {
    this.title = 'Ultimate Angular'
  }
}