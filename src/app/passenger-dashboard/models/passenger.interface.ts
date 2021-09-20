export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number,
  baggage: string
  // checkInDate?: number if null doesn't exist
}