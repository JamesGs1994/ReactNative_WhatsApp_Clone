const store = {
  players: [
    {
      id: 1,
      name: 'Sachin',
      likes: [
        {type: 'food', value: ['idly', 'Dosa']},
        {type: 'Drinks', value: ['lemon Juice', 'Apple Juice']},
      ],
    },
    {
      id: 2,
      name: 'Dhoni',
      likes: [
        {type: 'food', value: ['vada', 'uppuma']},
        {type: 'Drinks', value: ['Orange Juice', 'mango Juice']},
      ],
    },
    {
      id: 3,
      name: 'Raina',
      likes: [
        {type: 'food', value: ['idly', 'Dosa']},
        {type: 'Drinks', value: ['lemon Juice', 'Apple Juice']},
      ],
    },
  ],
};

for (let i = 0; store.players.length > i; i++) {
  for (x of store.players[i].likes) {
    let a = x.value.find(e => e == 'idly');
    if (a == 'idly') {
      console.log(store.players[i].name);
    }
  }
}
