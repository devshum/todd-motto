import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handlerClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Vlad';
  handlerClick(value: string) {
    console.log(value);
  }
}