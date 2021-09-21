import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      <div>
        Passenger name:
        <input type="text" 
               name="fullName" 
               required
               #fullname="ngModel"
               [ngModel]="detail?.fullName">
               
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input type="number" 
               name="id" 
               required
               #id="ngModel"
               [ngModel]="detail?.id">
        
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger id ID required
        </div>
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
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid">
        Update passenger
      </button>
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