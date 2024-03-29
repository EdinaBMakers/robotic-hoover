'use strict';

jest.mock('fs');

const CleaningDetailsReader = require('../src/cleaningDetailsReader');
const fs = require('fs');

describe('CleaningDetailsReader', () => {

  let reader;

  beforeEach(() => {
    fs.givenFileContent(undefined);
    reader = new CleaningDetailsReader();
  });

  describe('Read', () => {
    test('it can read the room dimensions', () => {
      fs.givenFileContent(`5 4\n2 3\nNSEW`);

      const cleaningDetails = reader.read('file');

      expect(cleaningDetails.roomX).toBe(5)
      expect(cleaningDetails.roomY).toBe(4)
    });

    test('it can read hoover position', () => {
      fs.givenFileContent(`5 4\n2 3\nNSEW`);

      const cleaningDetails = reader.read('file');

      expect(cleaningDetails.hooverPosition).toStrictEqual([2, 3]);
    });

    test('it can read driving instructions', () => {
      fs.givenFileContent(`5 4\n2 3\nNSEW`);

      const cleaningDetails = reader.read('file');

      expect(cleaningDetails.drivingInstructions).toStrictEqual(['N', 'S', 'E', 'W']);
    });

    test('it can read dirt patch positions', () => {
      fs.givenFileContent(`5 4\n2 3\n1 0\n2 2\nNSEW`);

      const cleaningDetails = reader.read('file');

      expect(cleaningDetails.dirtPositions).toStrictEqual([[1, 0], [2, 2]]);
    });
  });
});