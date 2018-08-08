import {App} from '../src/app/app';

import {expect} from 'chai';
import {describe, it} from 'mocha';
import {makeFetch} from 'supertest-fetch';

import config from 'config';

const server = new App().app.listen(3000);
const request = makeFetch(server);

describe('Initialize test rig...', () => {
  it('should return', () => {
    expect(true);
  });
});

describe('Load default config data...', () => {
  it('should return a value', () => {
    expect(config.get('appName')).to.not.be.empty;
  });
});

describe('Environment config should override default...', () => {
  it('should not return `default`', () => {
    expect(config.get('env')).not.equal('default');
  });
});

describe('Loading express...', () => {

  it('responds to /', async () => {
    await request('/')
      .expect(200);
  });

  it('responds to /health-check', async () => {
    await request('/health-check')
      .expect(200);
  });

  it('404 to all other routes', async () => {
    await request('/foo/bar')
      .expect(404);
  });

});
