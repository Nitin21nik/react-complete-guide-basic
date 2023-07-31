import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
//if you want to just make use of single 'useState' hook, you can proceed as below:
    // const [userInput,SetUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    //Multiple state approach Vs Single state approach
    const titleChangeHandler=(event)=>{

        setEnteredTitle(event.target.value);

        // SetUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });

      //OR...
      
        //whenever in new state we take help of previous state we include it in a fucntion with the snapshot of  previous state
        // SetUserInput((prevState)=>{
        //     return{
        //     ...prevState,
        //     enteredTitle:event.target.value
        //  };
        // });
    };

    const amountChangeHandler=(event)=>{

        setEnteredAmount(event.target.value);
        // SetUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    }

    const dateChangeHandler=(event)=>{

        setEnteredDate(event.target.value);
        // SetUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });

    }


    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount}  min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date'value={enteredDate}  min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;