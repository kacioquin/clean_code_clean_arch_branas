import Segment from "./Segment";

export default class Ride {
  private segments: Segment[]
  MIN_FARE = 10;
  NORMAL_FARE = 2.1;
  SUNDAY_FARE = 2.9;
  OVERNIGTH_FARE = 3.9;
  OVERNIGTH_SUNDAY = 5;

  constructor() {
    this.segments = []
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date))
  }

  calculateFare() {
    let fare = 0;
    for (const segment of this.segments) {

      if (segment.isOvernigth() && !segment.isSunday()) {
        fare += segment.distance * this.OVERNIGTH_FARE;
      }

      if (segment.isOvernigth() && segment.isSunday()) {
        fare += segment.distance * this.OVERNIGTH_SUNDAY;
      }

      if (!segment.isOvernigth() && segment.isSunday()) {
        fare += segment.distance * this.SUNDAY_FARE;
      }

      if (!segment.isOvernigth() && !segment.isSunday()) {
        fare += segment.distance * this.NORMAL_FARE;
      }
    }

    return (fare < this.MIN_FARE) ? this.MIN_FARE : fare
  }

}