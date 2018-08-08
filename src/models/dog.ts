import {Animal} from "./animal";

export class Dog extends Animal {

  constructor() {
    super("Dog", "Bark");
  }

  makeSound(): void {
    console.log("Woof!");
  }
}