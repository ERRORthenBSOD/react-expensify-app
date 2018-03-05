import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({description, amount,createdAt, id})=> (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <h2>{amount} - {createdAt}</h2>
        </div>
);
// const ExpenseListItem = (props)=> (
//     <div>
//         <h2>This are the expense items</h2>
//         <h3>{props.description}</h3>
//         <h2>{props.amount} - {props.createdAt}</h2>
//         <button onClick={()=>{
//             props.dispatch(removeExpense({ id: props.id }));
//         }}>Remove</button>
//     </div>
// );

export default ExpenseListItem;
