import {NextFunction, Request, Response, Router} from 'express';

export class Index {
  static create(router: Router) {
    router.get('/', (req: Request, res: Response) => {
      res.sendStatus(200);
    });

    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });

    router.get(
      '/health-check', (req: Request, res: Response, next: NextFunction) => {
        this.healthCheck(req, res, next);
      });
  }

  private static healthCheck(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(200);
  }
}