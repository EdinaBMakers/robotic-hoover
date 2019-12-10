'use strict';

const CleaningDetails = require('../src/cleaningDetails');
const Hoover = require('../src/hoover');

describe('Hoover', () => {

  test('it can return its position', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [1, 1], [], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([1, 1]);
  });

  test('it can go north', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [0, 0], ['N'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([0, 1]);
  });
  
  test('it can go south', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['S'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([4, 3]);
  });

  test('it can go east', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['E'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([5, 4]);
  });

  test('it can go west', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['W'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([3, 4]);
  });
});