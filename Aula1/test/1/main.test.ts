import { calculateRide } from "../../src/1/main"

test("Deve calcular a tarifa de uma corrida em um dia normal", function () {
  const input = [{
    distance: 10,
    date: new Date("2021-03-01T10:00:00")
  }]

  const fare = calculateRide(input);
  expect(fare).toBe(21);
});

test("Deve calcular a tarifa de uma corrida de noite", function () {
  const input = [{
    distance: 10,
    date: new Date("2021-03-01T23:00:00")
  }]

  const fare = calculateRide(input);
  expect(fare).toBe(39);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
  const input = [{
    distance: 10,
    date: new Date("2021-03-07T10:00:00")
  }]

  const fare = calculateRide(input);
  expect(fare).toBe(29);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
  const input = [{
    distance: 10,
    date: new Date("2021-03-07T23:00:00")
  }]

  const fare = calculateRide(input);
  expect(fare).toBe(50);
});

test("Deve retornar 'Invalid distance' se a distância for inválida", function () {
  const input = [{
    distance: -10,
    date: new Date("2021-03-07T23:00:00")
  }]

  expect(() => calculateRide(input)).toThrow(new Error("Invalid distance"))
});

test("Deve retornar 'Invalid date' se a data for inválida", function () {
  const input = [{
    distance: 10,
    date: new Date("abcdef")
  }]

  expect(() => calculateRide(input)).toThrow(new Error("Invalid date"))
});

test("Deve calcular a tarifa mínima de uma corrida", function () {
  const input = [{
    distance: 2,
    date: new Date("2021-03-01T23:00:00")
  }]

  const fare = calculateRide(input);
  expect(fare).toBe(10);
});