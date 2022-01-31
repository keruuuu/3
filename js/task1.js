const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  for (let prop of Object.keys(user)) {
    console.log(`${prop} = ${user[prop]}`);
  }