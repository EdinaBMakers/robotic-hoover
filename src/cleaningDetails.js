'use strict';

class CleaningDetails {
  constructor(roomX, roomY, hooverPosition, drivingInstructions, dirtPositions) {
    this.roomX = roomX;
    this.roomY = roomY;
    this.hooverPosition = hooverPosition;
    this.drivingInstructions = drivingInstructions;
    this.dirtPositions = dirtPositions;
  }
}

module.exports = CleaningDetails;