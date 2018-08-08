import bodyParser from 'body-parser';
import express from 'express';

import {Index} from '../routes/index';
import {Api} from '../routes/api';

export class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }

  private routes(): void {
    const router = express.Router();

    Index.create(router);
    Api.create(router);


    this.app.use('/', router);
  }
}


