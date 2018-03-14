import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCY9OI7sQpIouREDv5ZBfbbB0BMrZXOhiQ",
    authDomain: "expensify-react-redux.firebaseapp.com",
    databaseURL: "https://expensify-react-redux.firebaseio.com",
    projectId: "expensify-react-redux",
    storageBucket: "expensify-react-redux.appspot.com",
    messagingSenderId: "629319075068"
};
firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log('child removed',snapshot.key, snapshot.val());
});

//child_changed

database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log('child changed', snapshot.key, snapshot.val());
});

//child_added

database.ref('expenses').on('child_added', (snapshot)=>{
    console.log('child exist or added', snapshot.key, snapshot.val());
});


// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

database.ref('expenses').on('value', (snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(expenses);
});
// database.ref('notes').push({
//     title: 'Angular',
//     body: "Need to know"
// });
//
// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: 34905309
// });
//
// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 2120,
//     createdAt: 34905309
// });
//
// database.ref('expenses').push({
//     description: 'water bill',
//     note: '',
//     amount: 1200,
//     createdAt: 34905309
// });

// database.ref('notes/-L7Z581Mhs6EWLrlr14f').update({
//     body: 'buy food'
// });
// const firebaseNotes = {
//     notes: {
//         sdfgdfsdsfg: {
//             title: 'First note!',
//             body: "This is my note"
//         },
//         xcvxfkgj: {
//             title: 'another note',
//             body: 'body note 2'
//         }
//     }
// };
//
// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: "This is my note"
// }, {
//     id: '76sdf',
//     title: 'another note',
//     body: 'body note 2'
// }];

// database.ref().set(firebaseNotes);

//////////////////////////////SUBSCRIPTION
// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// }, (e)=>{
//     console.log('Error with data fetching', e);
// });

// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} living in ${val.location.city} city`);
// });

// database.ref().on('value', onValueChange);
//////////////////////////UNSUBSCRIBE

// database.ref().off();
// database.ref().off(onValueChange);

//////////////////////////////FETCH DATA

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val =snapshot.val();
//         console.log(val);
//     })
//     .catch((err)=>{
//         console.log('ERROR OMG', err);});
////////////////////////////SETDATA
// database.ref().set({
//     name: 'Dimon',
//     age: 31,
//     isSingle: false,
//     job: 'Manager',
//     location: {
//         city: "Philadelphia",
//         country: "USA"
//     },
//     attributes: {
//         height: 190,
//         weight: 120
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This failed.', e);
// });

///////////////////////////////UPDATE
// database.ref().update({
//     name: 'Dimon Atmo',
//     age: 30,
//     job: 'Programmer',
//     isSingle: null,
//     location: {
//         city: "Boston",
//         country: "USA"// need country not overwrite location obj
//     },
// });

// database.ref().update({
//
//     job: 'Programmer',
//     'location/city': 'Boston'
// });

// database.ref().set('This is my data.');
// database.ref('age').set(31);
// database.ref('location/city').set('Moscow');
// database.ref('isSingle').set('false');

// database.ref('/attributes/smth').set('Russia');
//
// console.log('Data changed');

// database.ref('attributes').set({
//     heigth: 100600,
//     weight: 100500
// }).catch((err)=>{
//     console.log('OMG ERROR: ', err)});


////////////////// REMOVE
// database.ref('isSingle').remove().then(()=>{
//     console.log('Removed dat');
// }).catch((err)=>{
//     console.log('Can`t delete', err)});

// database.ref('isSingle').set(null); //как remove