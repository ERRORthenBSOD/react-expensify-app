import uuid from 'uuid';
import database from '../firebase/firebase';


//component calls action generator
//action generator return object
//component dispatches object
//redux store changes

//component calls action generator
//action generator return function
//component dispatches function(?)
//function runs (has tha ability to dispatch other and do whatever it wants)

//ADD_EXPENSE ACTION

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

// export const addExpense = (
//     {
//         description = '',
//         note='',
//         amount = 0,
//         createdAt = 0
//     }={}
// ) => ({
//     type: "ADD_EXPENSE",
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });


export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE ACTION
export const removeExpense = ({id} = {})=> ({
    type: "REMOVE_EXPENSE",
    id
});

//EDIT_EXPENSE

export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
