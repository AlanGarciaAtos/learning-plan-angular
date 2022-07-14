function greet(name) {
  console.log('HI');
}

//No mutation (good!)

let rooms = ['H1', 'H2', 'H3'];
let newRooms = rooms.map((rm) => {
  // if (rm == 'H3') {
  //   return 'H4';
  // } else {
  //   return rm;
  // }
  return rm == 'H3' ? 'H4' : rm;
});

newRooms; //['H1', 'H2', 'H4']
rooms; //['H1', 'H2', 'H3']
