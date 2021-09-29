import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span 
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      <div *ngIf="editing">
        <input 
          type="text" 
          [value]="detail.fullName"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullName }}
      </div>
      <span class="date">
        Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd') : 'Not checked in' }}
      </span>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
      <button (click)="goToPassenger()">
        View
      </button>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges {
  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() view: EventEmitter<Passenger> = new EventEmitter()

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes: any) {
    if(changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  goToPassenger() {
    this.view.emit(this.detail)
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}