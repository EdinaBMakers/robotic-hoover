'use strict';

const mockfs = jest.genMockFromModule('fs');

let _fileContent;

function readFileSync(file, options, encoding, flag) {
  return _fileContent;
}

function givenFileContent(content) {
  _fileContent = content;
}

mockfs.readFileSync = readFileSync;
mockfs.givenFileContent = givenFileContent;

module.exports = mockfs;