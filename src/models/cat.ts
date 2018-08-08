import {Animal} from './animal';

export class Cat extends Animal {

  constructor() {
    super("Cat", "Meow");
  }

  makeSound(): void {
    console.log("Purr");
  }
}