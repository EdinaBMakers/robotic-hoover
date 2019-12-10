'use strict';

class Hoover {
  constructor(cleaningDetails) {
    this.position = cleaningDetails.hooverPosition;

    this._clean(cleaningDetails.drivingInstructions);
  }

  _clean(drivingInstructions) {
    drivingInstructions.forEach(instruction => {
      switch (instruction) {
        case 'N':
          this.position[1]++;
          break;
      }
    });
  }
}

module.exports = Hoover;