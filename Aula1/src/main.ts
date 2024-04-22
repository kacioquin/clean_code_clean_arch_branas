const MIN_FARE = 10;
const NORMAL_FARE = 2.1;
const SUNDAY_FARE = 2.9;
const OVERNIGTH_FARE = 3.9;
const OVERNIGTH_SUNDAY = 5;

function isOvernigth(date: Date) {
  return date.getHours() >= 22 || date.getHours() <= 6
}

function isSunday(date: Date) {
  return date.getDay() === 0
}

function isValidDistance(distance: number) {
  return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}

function isValidDate(date: Date) {
  return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}

export function calculateRide(segments: { distance: number, date: Date }[]) {
  let fare = 0;
  for (const segment of segments) {
    if (!isValidDistance(segment.distance)) throw new Error("Invalid distance")
    if (!isValidDate(segment.date)) throw new Error("Invalid date")
    if (isOvernigth(segment.date) && !isSunday(segment.date)) {
      fare += segment.distance * OVERNIGTH_FARE;
    }

    if (isOvernigth(segment.date) && isSunday(segment.date)) {
      fare += segment.distance * OVERNIGTH_SUNDAY;
    }

    if (!isOvernigth(segment.date) && isSunday(segment.date)) {
      fare += segment.distance * SUNDAY_FARE;
    }

    if (!isOvernigth(segment.date) && !isSunday(segment.date)) {
      fare += segment.distance * NORMAL_FARE;
    }
  }

  return (fare < MIN_FARE) ? MIN_FARE : fare
}