'use strict';

const fs = require('fs');
const CleaningDetails = require('./cleaningDetails');

class CleaningDetailsReader {
  read(file) {
    const lines = fs.readFileSync(file).split('\n');
    const roomDimensions = lines.shift().split(' ');
    const roomX = parseInt(roomDimensions[0]);
    const roomY = parseInt(roomDimensions[1]);

    return new CleaningDetails(roomX, roomY);
  }
}

module.exports = CleaningDetailsReader;