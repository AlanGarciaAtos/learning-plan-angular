import axios from 'axios';

//* With node or before E2015
// module.exports = {
//   getOne: function () {
//     return new Promise((resolve, reject) => {
//       fetch('http://api.icndb.com/jokes/random')
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data);
//           // return data;
//           resolve(data.value.joke);
//         });
//     });
//   },
// };

//* E2015
// export const jokes = {
//   getOne: function () {
//     return new Promise((resolve, reject) => {
//       fetch('http://api.icndb.com/jokes/random')
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data);
//           // return data;
//           resolve(data.value.joke);
//         });
//     });
//   },
// };

//*Axios
export const jokes = {
  getOne: function () {
    return new Promise((resolve, reject) => {
      axios.get('http://api.icndb.com/jokes/random').then((res) => {
        resolve(res.data.value.joke);
      });
    });
  },
};
