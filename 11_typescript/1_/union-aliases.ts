type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


function combine(input1:number | string, input2:number | string, resultConversion: 'as-number' | 'as-text') {
  let res;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    res = +input1 + +input2;
  }else {
    res = input1.toString() + input2.toString();
  }
  return res;

  // if(resultConversion === 'as-number') {
  //   return +res;
  // }else {
  //   return res.toString();
  // }
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna','as-text');
console.log(combinedNames);
