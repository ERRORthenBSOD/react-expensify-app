const person = {
    name : 'Dimon',
    age: 31,
    location: {
        city: 'Moscow',
        temp: -11
    }
};

const {name: firstName = 'Azz', age} = person;
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}`);


const {city, temp: temperature} = person.location;
if(city && typeof temperature === 'number'){
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
      // name: 'Penguin'
  }
};


const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); //Penguin, self-Published



