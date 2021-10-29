// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number;
}

let addNums: AddFn;

addNums = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }

}

let user1: Greetable;
user1 = new Person('Tyler');

// user1 = {
//   name: 'Tyler',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

user1.greet('hi there i am');