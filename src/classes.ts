// const userName = 'Tyler';
// let age = 30;

// age = 29;

// const add = (a: number = 2, b: number = 1) => a + b;

// if (age > 20) {
//   let isOld = true;
// }


// console.log(isOld);

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', e => console.log(e));
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Tyler',
  age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0)
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...otherHobbies] = hobbies;

const { firstName: userName, age } = person;

console.log(userName, person);





abstract class Department {

  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {

  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');

  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`)
  }
}





class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('No report found.');
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value.')
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d4', []);
    return this.instance;

  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === 'Tyler') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Tyler');
console.log(employee1, Department.fiscalYear);

// const accounting = new Department('d1', 'Accounting');
const IT = new ITDepartment('d2', ['Tyler']);
// const accounting = new AccountingDepartment('d3', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong!');
console.log(accounting.mostRecentReport);


accounting.getReports();

accounting.addEmployee('Tyler');
accounting.addEmployee('Maggie');

// accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.printEmployeeInfo();
accounting.describe();
IT.describe();


// const accountingCopy = {
//   name: 'DUMMY',
//   describe: accounting.describe
// };

// accountingCopy.describe();

// console.log(accounting);


// class Product {
//   private isListed: boolean;

//   constructor(public title: string, public price: number) {
//     this.isListed = true;
//   }

//   productStock() {
//     console.log(this.isListed);
//   }
// }

// const product = new Product('Apple', 1);