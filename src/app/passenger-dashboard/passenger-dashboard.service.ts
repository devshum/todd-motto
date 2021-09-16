import { Passenger } from "./models/passenger.interface";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassnegers(): Passenger[] {
    return [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 139074200000,
        children: null
      },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7}]
      },
      {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1391606000000,
        children: null
      },
      {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      },
      {
        id: 5,
        fullName: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ]
  }
}