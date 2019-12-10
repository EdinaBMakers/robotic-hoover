'use strict';

const CleaningDetails = require('../src/cleaningDetails');
const Hoover = require('../src/hoover');

describe('Hoover', () => {

  test('it can return its position', () => {
    const cleaningDetails = new CleaningDetails(5, 5, [1, 1], [], []);
    const hoover = new Hoover(cleaningDetails);

    expect(hoover.position).toStrictEqual([1, 1]);
  });
});