
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {ADMIN, READ_ONLY, AUTHOR};
// enum Role {ADMIN = 4, READ_ONLY, AUTHOR};
enum Role {ADMIN = 'ADMIN', READ_ONLY = 42, AUTHOR = 321};


// const person: {name:string; age:number} = {
const person = {
  name: 'Alan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if(person.role === Role.ADMIN){
  console.log('is admin');
  
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin']

let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR, here TS shine
}
