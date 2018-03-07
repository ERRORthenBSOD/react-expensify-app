import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {})=>({
    type: "INCREMENT",
    incrementBy    // : incrementBy
});

const decrementCount = ({decrementBy = 1} = {})=>({  //add default empty object
    type: "DECREMENT",
    decrementBy // : decrementBy
});

const resetCount = ()=>({
    type: "RESET"
});

const setCount = ({count})=>({
    type: "SET",
    count
});

// Reducers
//1. Reducers are pure functions
//2. Never change state or action


const countReducer = (state = {count: 0}, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);


//FOR UNSUBSCRIBE just call return of subscribe
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

//Actions - object that gets sent to the store

//Action generators - functions that return action objects

//increment ,
store.dispatch(incrementCount({incrementBy: 8}));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy : 5
// });

store.dispatch(incrementCount());

// unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// });

// decrement,

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 11}));


// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// reset

store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//    type: 'SET',
//    count: 102
// });

store.dispatch(setCount({count: 300}));

