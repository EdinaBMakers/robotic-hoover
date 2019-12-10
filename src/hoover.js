'use strict';

class Hoover {
  constructor(cleaningDetails) {
    this.position = cleaningDetails.hooverPosition;

    this._clean(cleaningDetails);
  }

  _clean(cleaningDetails) {
    cleaningDetails.drivingInstructions.forEach(instruction => {
      switch (instruction) {
        case 'N':
          if (this.position[1] < cleaningDetails.roomY) {
            this.position[1]++;
          };
          break;
        case 'S':
          if (this.position[1] > 0) {
            this.position[1]--;
          };
          break;
        case 'E':
          if (this.position[0] < cleaningDetails.roomX) {
            this.position[0]++;
          };
          break;
        case 'W':
          if (this.position[0] > 0) {
            this.position[0]--;
          };
          break;
      }
    });
  }
}

module.exports = Hoover;