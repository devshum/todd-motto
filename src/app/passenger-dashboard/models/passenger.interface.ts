export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: number | null,
  baggage: string
  // checkInDate?: number if null doesn't exist
}