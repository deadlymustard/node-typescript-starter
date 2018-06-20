import {logger} from '../src/logger';

import {expect} from 'chai';

import {describe, it, beforeEach} from 'mocha';

import fs from 'fs';

describe('Should write logs to file...', () => {

  beforeEach(() => {
    logger.info('test123');
  });

  it('should create log files', () => {
    expect(fs.existsSync('combined.log')).to.be.true;
  });

  it('should write to log files', () => {
    expect(fs.readFileSync('combined.log').toString().includes('test123')).to.be.true;
  });
});