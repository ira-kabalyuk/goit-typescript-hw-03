/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

interface StudentOptions {
  name: string;
  age: number;
  grade: string;
}

class Student {
  constructor(public options: StudentOptions) {}
}

const student = new Student({ name: "John", age: 18, grade: "A" });

export {};