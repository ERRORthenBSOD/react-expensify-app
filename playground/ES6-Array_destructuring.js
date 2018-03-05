const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const address = [];

const [, city, state = 'New York'] = address;


console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee = 'Americano', , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);