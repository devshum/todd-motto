import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handlerClick()">
        Change Name
      </button>
      <!-- <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"> -->
      <input 
        type="text" 
        [(ngModel)]="name">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Vlad';
  handlerClick() {
    this.name = 'Shum';
  }
  // handleChange(value: string) {
  //   this.name = value;
  // }
}