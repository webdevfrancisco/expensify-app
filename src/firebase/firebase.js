import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDKqLxbbGb0zcuwdHKUTAcU7KNyBEkg-4M",
	authDomain: "expensify-83659.firebaseapp.com",
	databaseURL: "https://expensify-83659.firebaseio.com",
	projectId: "expensify-83659",
	storageBucket: "expensify-83659.appspot.com",
	messagingSenderId: "490579314087"
 };
  firebase.initializeApp(config);

  const database = firebase.database();

  // database.ref('expenses').push({
  // 	description: 'Rent',
  // 	note: 'pay mami every month on the first',
  // 	amount: '$300'
  // });
  // database.ref('expenses').push({
  // 	description: 'Gym',
  // 	note: 'every 15 of the month',
  // 	amount: '$35'
  // });
  // database.ref('expenses').push({
  // 	description: 'Car note',
  // 	note: 'car loan payment',
  // 	amount: '$180'
  // });

  database.ref('expenses').once('value').then((snapshot) =>{
	const expenses = [];

	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});
	console.log(expenses);
  });

  //SUBSCRIPTION TO DATABASE
  database.ref('expenses').on('value', (snapshot) => {
	const expenses = [];
	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});
	console.log(expenses);
  });

  //CHILD_REMOVED, CONSOLE LOGS WHAT HAS BEEN REMOVED FROM DATABASE
  database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
  });

  //CHILD_CHANGED, CONSOLE LOGS WHAT HAS BEEN CHANGED IN THE DATABASE
  database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
  });

  //CHILD_ADDED, CONSOLE LOGS ALL EXITING AND NEW CHILDS IN THE DATABASE
  database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
  });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  // 	console.log(snapshot.val());
  // }, (e) => {
  // 	console.log('Error with data fetching', e);
  // });

  // setTimeout(() => {
  // 	database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() => {
  // 	database.ref().off(onValueChange); //removes subcriptions but still updates database.
  // }, 7000);

  // setTimeout(() => {
  // 	database.ref('age').set(30);
  // }, 10500);

 //  database.ref('location').once('value').then((snapshot) => { //FETCHES DATABASE ONCE
 //  	const val = snapshot.val();
 //  	console.log(val);
 //  }).catch((e) => {
	// console.log('error :', e);
 //  });

 //  database.ref().set({
	// name: 'Francisco',
	// age: 26,
	// stressLevel: 3,
	// job: {
	// 	title: 'Web Developer',
	// 	company: 'Dream Town Realty'
	// },
	// location:{
	// 	city: 'Chicago',
	// 	country: 'Unite State'
	// }


 //  }).then(() => {
 //  	console.log('Data is saved!');
 //  }).catch((error) => {
 //  	console.log('This failed.', error);
 //  })

 //  database.ref().update({
 //  	stressLevel: 9,
 //  	'job/company': 'Amazon',
 //  	'location/city': 'Seattle'
 //  });


// database.ref('isSingle').remove().then(() => {
// 	console.log('data removed');

// }).catch((e) => {
// 	console.log('error: ', e);
// })

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })