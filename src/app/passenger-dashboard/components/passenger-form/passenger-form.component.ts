import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input type="text" 
               name="fullName" 
               [ngModel]="detail?.fullName">
      </div>

      <div>
        Passenger ID:
        <input type="number" 
               name="id" 
               [ngModel]="detail?.id">
      </div>

      <div>
        <label>
          <input type="checkbox"
                 name="checkedIn"
                 [ngModel]="detail?.checkedIn"
                 (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number"
               name="checkInDate"
               [ngModel]="detail?.checkInDate">
      </div>


      <div>
        Luggage:
        <!-- <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select> -->

        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [ngValue]="item.key">
            {{ item.value }}
          </option>
        </select>
      </div>

      {{ form.value | json }}
    </form>
  `
})

export class PassengerFormCompoment {
  @Input() detail: Passenger

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hold-hold',
    value: 'Hold and hold baggage'
  }];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}