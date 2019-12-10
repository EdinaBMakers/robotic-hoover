const CleaningDetailsReader = require('./src/cleaningDetailsReader');
const Hoover = require('./src/hoover');

const cleaningDetails = new CleaningDetailsReader().read('input.txt');
const hoover = new Hoover(cleaningDetails);

console.log(`${hoover.hooverPosition[0]} ${hoover.hooverPosition[1]}\n${hoover.dirtsRemoved}`);