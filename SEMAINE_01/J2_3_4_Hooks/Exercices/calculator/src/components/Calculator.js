import { useReducer } from 'react';
import {initialState, reducer, COUNT, SET_NUMBER, ADD, MULT } from '../store/reducer';
import Message from './Message';

function Calculator() {
    const [state, dispatch ] = useReducer(reducer, initialState);
    const { number1, number2, resultat, message } = state;

    console.log(message)

    function handleChange(e){
        const { name, value: number } = e.target;
        dispatch({type : SET_NUMBER, name, number });
    }

  return (
    <div className="App">
      <p>Count : {state.count}</p>
      <p><button onClick={() => dispatch({type : COUNT, step : 2 })}> + 2</button></p>
      <h1>Calculator</h1>
      { resultat !== null && (<p>{resultat}</p>)}
      { message.content !== null && <Message { ...message } />}
        <p>Number 1 :<input onChange={handleChange} type="text" name="number1" value={number1} /></p>
        <p>Number 2 :<input onChange={handleChange} type="text" name="number2" value={number2} /></p>
        <p><button onClick={() => dispatch({type : ADD })}>ADD</button></p>
        <p><button onClick={() => dispatch({type : MULT })}>ADD</button></p>
    </div>
  );
}

export default Calculator;
