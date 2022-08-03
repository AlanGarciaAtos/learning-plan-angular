/* tslint:disable:no-unused-variable */
import { ReversePipe } from "./reverse.pipe";

describe('Component: User', () => {
  it('should reverse correctly an string', () => {
    let reversePipe = new ReversePipe;
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
})


// describe('Pipe: ReversePipe', () => {
//   it('should reverse the inputs', () => {
//     let reversePipe = new ReversePipe();
//     expect(reversePipe.transform('hello')).toEqual('olleh');
//   });
// });
