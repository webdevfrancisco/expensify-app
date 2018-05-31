//Object Destructuring
console.log('Object Destructuring');

const person = {
	name: 'Francisco',
	age: 27,
	location: {
		city: 'Chicago',
		temp: 45
	}
};

//const name = person.name;
//const age = person.age;

const {name, age} = person; //SAME AS const name and const age.
const {lastName = 'Bautista'} = person; // setting a default just in case not in object.


console.log(`${name} is ${age}`);

const {city, temp : temperature} = person.location //rename temp to temperature and grabbing from object it's value.

if (city && temperature) {
	console.log(`It's ${temperature} in ${city}`);
}
console.log(`My name is ${name} ${lastName}`);

const book =  {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin',

	}
}

const { name: publisherName = 'Self-Published'} = book.publisher; // getting publisher name from oject. while change the name varible to publisherName and setting a default value just incase a value doesn't exits in the object.

console.log(publisherName);

//
//Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, , state = 'New York'] = address; // get the first and third value from the array. skipping everything else.

console.log(`You are in ${street}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item

console.log(`A medium ${coffee} cost ${medium}`);
