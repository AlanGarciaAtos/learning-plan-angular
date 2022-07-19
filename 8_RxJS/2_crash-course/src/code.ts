// ? Is is because a different version or * ?
// import * as Rx from 'rxjs/Observable';

import { AsyncSubject, BehaviorSubject, from, fromEvent, merge, observable, Observable, pipe, ReplaySubject, Subject } from "rxjs";
import { map, mergeWith, pluck, share, subscribeOn, skipUntil } from "rxjs/operators";

//* Subject An "Observable" that can only read values emitted form an observable, BehaviorSubject, ReplaySubject, AsyncSubject, from
//* Operators merge, map, subscribe, pluck, skipUntil,interval

// const subject = new Subject();
// const subject = new BehaviorSubject('First');
// const subject = new ReplaySubject(30,500);
const subject = new AsyncSubject();

const observable2 = new Subject();
// setTimeout(() => {
//   observable2.next('Hey!')
// }, 13000);
observable2.next('Hey!')

const observable1 = new Observable((data:any) => {
  let i = 1;
  setInterval(() => {
    data.next(i++)
  },1000)
}).pipe(
  skipUntil(observable2)
)

observable1.subscribe((x:any) => addItem(x));

// const newObs = observable1.skipUntil(observable2);

//? Using from
// from([
//   {first: 'Gary', last: 'Simon', age: 34},
//   {first: 'Alan', last: 'Simon', age: 20},
//   {first: 'Red', last: 'Simon', age: 10}
// ]).pipe(
//   pluck('first'),
// ).subscribe((x:any) => addItem(x)) //Only first property (name)

//Making a new observable with the new way
// const observable = new Observable((observer:any) => {
//   observer.next('Hey guys! 😎');
// }).pipe(
//   map((val:any) => val.toUpperCase()),
// ).subscribe((x:any) => addItem(x));

// const observable2 = new Observable((observer:any) => {
//   observer.next('How is it going?');
// })

//? Also merge is deprecated use mergeWith
// const newObs = merge(observable, observable2);

// newObs.subscribe((x:any) => addItem(x))

//? This is also deprecated
// subject.subscribe(
//   data => addItem('Observer 1: ' + data),
//   err => addItem(err),
//   () => addItem('Observer 1 completed')
// )

let i = 1
let int = setInterval(() => subject.next(i++), 100);
setTimeout(() => {
  let observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
  )
  subject.complete();
}, 500)

// subject.next('The first thing has been sent');
// subject.next('Another thing has been sent');
// subject.next('...Observer 2 is about to subscribe...');


// subject.next('The second thing has been sent')
// subject.next('The third thing has been sent')

// observer2.unsubscribe();
// subject.next('A final thing has been sent')

function addItem(val:any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}

//* Observable using fromEvent
// const observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//   let subscription = observable.subscribe(
//     ((x:any) => addItem(x)),
//   )
// },2000)

//* Observables, observers, observer.add?, subscribe, unsubscribe, .next, .error
//? Is this deprecated? Use new Observable
// const observable = Observable.create((observer:any) => {
//   try{
//     observer.next('Hey amikos 😎');
//     observer.next('How are you? :0');
//     setInterval(() => {
//       observer.next('I am good');
//     },2000)
//   }catch(err){
//     observer.error(err)
//   }
// }).pipe(
//   share()
// );

// const observer = observable.subscribe(
//   (x:any) => addItem(x),
//   (err:any) => addItem(err),
//   () => addItem('Completed')
// );

// const observer2 = observable.subscribe(
//   (x:any) => addItem(x)
// );

// //? Huh???? Why this unsubscribe?
// observer.add(observer2);

// setTimeout(() => {
//   let observer2 = observable.subscribe(
//     (x:any) => addItem('Subscriber 2: ' + x)
//   )
// },1000)