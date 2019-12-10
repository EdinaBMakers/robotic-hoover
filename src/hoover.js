'use strict';

class Hoover {
  constructor(cleaningDetails) {
    this.hooverPosition = cleaningDetails.hooverPosition;
    this.dirtsPositionStrs = cleaningDetails.dirtPositions.map(JSON.stringify);
    this.dirtsRemoved = 0;

    this._clean(cleaningDetails);
  }

  _clean(cleaningDetails) {
    cleaningDetails.drivingInstructions.forEach(instruction => {
      switch (instruction) {
        case 'N':
          if (this.hooverPosition[1] < cleaningDetails.roomY) {
            this.hooverPosition[1]++;
          };
          break;
        case 'S':
          if (this.hooverPosition[1] > 0) {
            this.hooverPosition[1]--;
          };
          break;
        case 'E':
          if (this.hooverPosition[0] < cleaningDetails.roomX) {
            this.hooverPosition[0]++;
          };
          break;
        case 'W':
          if (this.hooverPosition[0] > 0) {
            this.hooverPosition[0]--;
          };
          break;
      }

      let positionStr =  JSON.stringify(this.hooverPosition);

      if (this.dirtsPositionStrs.includes(positionStr)) {
        this.dirtsRemoved++;
        let dirtIndex = this.dirtsPositionStrs.indexOf(positionStr);
        this.dirtsPositionStrs.splice(dirtIndex, 1);
      }
    });
  }
}

module.exports = Hoover;