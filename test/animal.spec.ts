import {expect} from 'chai';
import {describe, it} from 'mocha';

import {Animal} from "../src/models/animal";
import {Dog} from "../src/models/dog";
import {Cat} from "../src/models/cat";
import {Person} from "../src/models/person";

describe('Dog is not a cat', () => {
  const dog: Dog = new Dog();

  it('should return true', () => {
    expect(dog !instanceof Cat === true);
  });
});

describe('Cat is an animal', () => {
  const cat: Cat = new Cat();

  it('should return true', () => {
    expect(cat instanceof Animal === true);
  });
});

describe('Person is not an animal', () => {
  const person: Person = new Person("Frank");

  it('should return false', () => {
    expect(person instanceof Animal === false);
  });
});

describe('Function returns cat or dog', () => {
  const catOrDog: Cat = getCatOrDog(1);
  //const person: Person = getCatOrDog(1);
  it('should return true', () => {
    expect(catOrDog instanceof Cat === true);
  });
});

function getCatOrDog(flag: number): Cat|Dog {
  if(flag === 0) return new Dog();
  else return new Cat();
}

