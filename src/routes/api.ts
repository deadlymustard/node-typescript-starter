import {Request, Response, Router} from 'express';
import {Cat} from "../models/cat";
import {Dog} from "../models/dog";
import {Animal} from "../models/animal";

export class Api {

  constructor() {}

  static create(router: Router) {
    router.get('/api/cat', (req: Request, res: Response) => {
      const cat: Animal = new Cat();
      cat.makeGreeting();
      cat.makeSound();

      res.sendStatus(200);
    });

    router.get('/api/dog', (req: Request, res: Response) => {
      const dog: Animal = new Dog();
      dog.makeGreeting();
      dog.makeSound();

      res.sendStatus(200);
    });
  }
}