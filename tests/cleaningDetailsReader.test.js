'use strict';

jest.mock('fs');

const CleaningDetailsReader = require('../src/cleaningDetailsReader');
const fs = require('fs');

describe('CleaningDetailsReader', () => {
  describe('Read', () => {
    test('it can read the room dimensions', () => {
      fs.givenFileContent(`5 4\n2 3`);

      const reader = new CleaningDetailsReader();
      const cleaningDetails = reader.read('file');

      expect(cleaningDetails.roomX).toBe(5)
      expect(cleaningDetails.roomY).toBe(4)
    });
  });
});