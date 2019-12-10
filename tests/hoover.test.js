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

  test('it cannot go north of the north wall', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [0, 5], ['N'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([0, 5]);
  });
  
  test('it can go south', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['S'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([4, 3]);
  });

  test('it cannot go south of the south wall', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [1, 0], ['S'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([1, 0]);
  });

  test('it can go east', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['E'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([5, 4]);
  });

  test('it cannot go east of the east wall', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [5, 4], ['E'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([5, 4]);
  });

  test('it can go west', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [4, 4], ['W'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([3, 4]);
  });

  test('it cannot go west of the west wall', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [0, 4], ['W'], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([0, 4]);
  });
});