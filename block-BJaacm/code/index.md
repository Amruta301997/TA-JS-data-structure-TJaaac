```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // output and reason true created new variable name newUser and it strored in variable name user
- `user === newUser;`//true 
- `user.name === newUser.name;`//true both values are same because it is stored in a variable name newUser
- `user.name == newUser.name;`//true
- `user.sibling == newUser.sibling;`//true Again created new varible name called user.sibling and connected to the newUser
- `user.sibling === newUser.sibling;`//true
- `user.sibling == allBrothers;`//false because allBrothers variable are not connected to others
- `user.sibling === allBrothers;`//false
- `brothersCopy === allBrothers;`//false
- `brothersCopy == allBrothers;`//false
- `brothersCopy == user.sibling;`//true
- `brothersCopy === user.sibling;`//true
- `brothersCopy[0] === user.sibling[0];`//true
- `brothersCopy[1] === user.sibling[1];`//true
- `user.sibling[1] === newUser.sibling[1];`//true
