import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handlerClick()">
        Change Name
      </button>
      <input 
        type="text" 
        [value]="name"
        (input)="handlerInput($event)"
        (blur)="handlerBlur($event)">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Vlad';
  handlerClick() {
    this.name = 'Shum';
  }
  handlerInput(event: any) {
    this.name = event.target.value;
  }
  handlerBlur(event: any) {
    this.name = event.target.value;
  }
}