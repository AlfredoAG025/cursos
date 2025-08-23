export class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public address?: string
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York');
//     }
// }

export class Hero {
    constructor(
        public person: Person,
        public alterEgo: string,
        public age: number,
        public realName: string
    ) { }
}
const tonyStark = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero(tonyStark, 'Iron Man', 45, 'Tony');

console.log(ironman);