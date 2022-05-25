import React, { useState} from 'react';
import '../App.css';

const Counter = (props) => {

const {maxValue = 1000, minValue = 1} = props;
const [counter, updateCounter] = useState(minValue);
const counterValueIncrement = (value) =>{
   
    if(maxValue > counter){
        updateCounter(counter => counter + 1);
    }
};
const counterValueDecrement = () =>{
    if(minValue < counter){
        updateCounter(counter => counter -1);
    }
}
const inputCounterValue = e =>{
    const userCounterValue = parseInt(e.target.value);
    if(userCounterValue <= maxValue && userCounterValue >= minValue){
        updateCounter(userCounterValue);
    }
    else if(userCounterValue < minValue || isNaN(userCounterValue)){
        updateCounter(minValue);
    }
    else if(userCounterValue > maxValue){
        updateCounter(maxValue);
    }
}
    return(
        <div className='mainDiv'>
            <button onClick = {counterValueDecrement} className="counterDecrement">
                -
            </button>
            
            <input value = {counter} onChange = {inputCounterValue} className = "counterInput"></input>
           
            <button onClick = {counterValueIncrement} className="counterIncrement">
                +
            </button>
        </div>
    );
};
    Counter.propTypes = {

    };


export default Counter;