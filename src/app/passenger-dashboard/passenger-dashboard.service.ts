import { Passenger } from "./models/passenger.interface";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { pluck, map } from 'rxjs/operators';

const PASSENGER_API: string = 'assets/mock/db.json';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}
  // old way
  // getPassnegers(): Observable<Passenger[]> {
  //   return this.http
  //              .get(PASSENGER_API)
  //              .pipe(map((response: HttpResponse) => response.json()))
  // }

  // new way
  getPassnegers(): Observable<Passenger[]> {
    return this.http
               .get<Passenger[]>(PASSENGER_API)
               .pipe(map((data: any) => data.passengers))
              // .pipe(pluck('passengers'))
  }
}