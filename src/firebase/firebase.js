import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// 
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
// 
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
// 
//   console.log(expenses);
// });

//  const expenses = [];
//  snapshot.forEach((childSnapshot) => {
//    expenses.push({
//    id: childSnapshot.key,
//    ...childSnapshot.val()
//  });
//
//  console.log(expenses);
// });
      

  //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  // });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
// 
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
// 
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     description: 'rent',
//     amount: 109500,
//     note: 'Note 1',
//     createdAt: 0
//   });

 



// database.ref('notes/-LKQSsAxM1lH0z4mfvOk').update({
//   body: 'Buy food for dinner'
// })

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// });



// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });
// 


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
// 
// setTimeout(() => {
//   database.ref('age').set(59);
// }, 3500);
// 
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// 
// setTimeout(() => {
//   database.ref('age').set(60);
// }, 10500);



// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });
// 


// database.ref().set({
//   name: 'Dale Halling',
//   age: 57,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Davao',
//     Country: 'Philippines'
//   }
// }).then(() => {
//   console.log('data is saved.');
// }).catch((e) => {
//   console.log('This failed,', e);
// });
// 
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().remove().
//   then(() => {
//     console.log('removed');
//   }).catch((e) => {
//     console.log('error: ', e);
//   });

// database.ref().set('this is my data.');

// database.ref('age').set(58);
// database.ref('location/city').set('Cebo');

// database.ref('attributes').set({
//     height: 72,
//     weight: 200
// }).then(() => {
//   console.log('attributes data saved');
// }).catch((e) => {
//   console.log('attributes data not saved: ', e)
// });
