/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
got.houses

// 2. Log the length of the "houses" key
got.houses.length
// 3. Log the name of all houses in got one by one
got.houses.name;

// 4. Log the name of all the people in house Starks (index 0) one by one
got.houses[0].people;
// 5. Log the name of all the people in house Lannisters (index 1) one by one
got.houses[1].people[0];
// 6. Log the description of all the people in house Lannisters (index 1) one by one
got.houses[1].people
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
console.log(`I am ${got.houses[1].people[0].name} and my bio is ${got.houses[1].people[0].description} `);
console.log(`I am ${got.houses[1].people[1].name} and my bio is ${got.houses[1].people[1].description} `);
console.log(`I am ${got.houses[1].people[2].name} and my bio is ${got.houses[1].people[2].description} `);
console.log(`I am ${got.houses[1].people[3].name} and my bio is ${got.houses[1].people[3].description} `);
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
console.log(`I am ${got.houses[0].people[0].name} and my bio is ${got.houses[0].people[0].description} `);
console.log(`I am ${got.houses[0].people[1].name} and my bio is ${got.houses[0].people[1].description} `);
console.log(`I am ${got.houses[0].people[2].name} and my bio is ${got.houses[0].people[2].description} `);
console.log(`I am ${got.houses[0].people[3].name} and my bio is ${got.houses[0].people[3].description} `);
console.log(`I am ${got.houses[0].people[4].name} and my bio is ${got.houses[0].people[4].description} `);
console.log(`I am ${got.houses[0].people[5].name} and my bio is ${got.houses[0].people[5].description} `);
console.log(`I am ${got.houses[0].people[6].name} and my bio is ${got.houses[0].people[6].description} `);
console.log(`I am ${got.houses[0].people[7].name} and my bio is ${got.houses[0].people[7].description} `);
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
console.log(`I am ${got.houses[0].people[2].name} and my bio is ${got.houses[0].people[2].description} `);
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
console.log(`I am ${got.houses[1].people[0].name} and my bio is ${got.houses[1].people[0].description} `);
// 11. Push the name of the houses in an array named `houseNames` and Log the array
/* let houseNames;
housesNames.push(houses);
houseNames.push(houseNames)*/
// 12. Log the size of people in Starks house
got.houses[0].people.length;
// 13. Log the size of people in Lannisters house
got.houses[1].people.length;
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
console.log(`name${got.houses[0].people.name}:${got.houses.people.length}`);
console.log(`name${got.houses[1].people.name}:${got.houses.people.length}`);
// 15. Log the name of all the people of all the houses in got one by one
console.log(`${got.houses[0].people.name}`);
console.log(`${got.houses[1].people.name}`);
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople=got.houses.people.name;
// 17. Log the value and length of `allPeople` array created above
console.log(allPeople);
// 18. Push all descriptions into an array named `allDescription`
let allDescription=got.houses.description
// 19. Log the value and length `allDescription`
allDescription.length;
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
