import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from "moment/moment";

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense',()=>{
    const expense = {
        id: '123abc',
        description: 'smth',
        note: 'smth',
        amount: 300,
        createdAt:0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit expense',()=>{
    const description = 'updated';
    const id = expenses[0].id;
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates:{
            description
        }
    };
    const state = expensesReducer(expenses, action);
    // expect(state[0].description==='updated').toBe(true);
    expect(state[0].description).toBe(description);
});

test('should not edit expense if id not found',()=>{
    const description = 'updated';
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates:{
            description
        }
    };
    const state = expensesReducer(expenses, action);
    // expect(state[0].description==='updated').toBe(true);
    expect(state).toEqual(expenses);
});