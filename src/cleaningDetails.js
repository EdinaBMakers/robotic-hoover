'use strict';

class CleaningDetails {
  constructor(roomX, roomY, hooverPosition, drivingInstructions) {
    this.roomX = roomX;
    this.roomY = roomY;
    this.hooverPosition = hooverPosition;
    this.drivingInstructions = drivingInstructions;
  }
}

module.exports = CleaningDetails;