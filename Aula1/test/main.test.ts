import { calc } from "../src/main"

test("Deve calcular a tarifa de uma corrida em um dia normal", function () {
  const input = [{
    dist: 10,
    ds: new Date("2021-03-01T10:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(21);
});

test("Deve calcular a tarifa de uma corrida de noite", function () {
  const input = [{
    dist: 10,
    ds: new Date("2021-03-01T23:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(39);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
  const input = [{
    dist: 10,
    ds: new Date("2021-03-07T10:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(29);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
  const input = [{
    dist: 10,
    ds: new Date("2021-03-07T23:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(50);
});

test("Deve retornar -1 se a distância for inválida", function () {
  const input = [{
    dist: -10,
    ds: new Date("2021-03-07T23:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(-1);
});

test("Deve retornar -2 se a data for inválida", function () {
  const input = [{
    dist: 10,
    ds: new Date("abcdef")
  }]

  const fare = calc(input);
  expect(fare).toBe(-2);
});

test("Deve calcular a tarifa mínima de uma corrida", function () {
  const input = [{
    dist: 2,
    ds: new Date("2021-03-01T23:00:00")
  }]

  const fare = calc(input);
  expect(fare).toBe(10);
});