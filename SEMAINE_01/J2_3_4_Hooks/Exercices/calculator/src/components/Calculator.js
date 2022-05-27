
import { useReducer } from 'react';

import {initialState, reducer, COUNT } from '../store/reducer';

function Calculator() {
    const [state, dispatch ] = useReducer(reducer, initialState);
    console.log(state.count)
  return (
    <div className="App">
      <p>Count : {state.count}</p>
      <p><button onClick={() => dispatch({type : COUNT, step : 2 })}> + 2</button></p>
    </div>
  );
}

export default Calculator;
