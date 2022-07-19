const { Observable } = require('rxjs');
const { map, pluck, filter } = require('rxjs/operators');

const users = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'inactive',
      age: 43,
    },
    {
      status: 'active',
      age: 21,
    },
    {
      status: 'inactive',
      age: 28,
    },
  ],
};
const users2 = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'inactive',
      age: 43,
    },
    {
      status: 'active',
      age: 13,
    },
    {
      status: 'inactive',
      age: 28,
    },
    {
      status: 'active',
      age: 38,
    },
    {
      status: 'inactive',
      age: 17,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users2);
  // subscriber.complete();

  subscriber.next(users);
  subscriber.next(users2);
}).pipe(
  pluck('data'),
  filter((value) => value.length >= 5),
  map((value) => {
    //console.log('2) Got data from first operator', value);
    return value.filter((user) => user.status === 'active');
  }),
  map((value) => {
    //console.log('3) Got data from second operator', value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    //console.log('4) Got data from third operator', value);
    if (value < 18) throw new Error('Average is too young');
    else return value;
  })
);

const observer = {
  next: (value) => {
    console.log('Observer got a value of ' + value);
  },
  error: (err) => {
    console.log('Observer got an error of ' + err);
  },
  complete: () => {
    console.log('Observer got a complete notification');
  },
};

observable.subscribe(observer);
