export abstract class Animal {

  constructor(public animalName: string, public animalNoise: string) {}

  makeGreeting(): void {
    console.log(`I am a ${this.animalName.toLowerCase()} and I say ${this.animalNoise.toLowerCase()}`);
  }

  abstract makeSound(): void;
}