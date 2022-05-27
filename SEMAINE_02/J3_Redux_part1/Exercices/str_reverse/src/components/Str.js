import { useSelector, useDispatch } from 'react-redux';
import { reverse, set_cost, shuffle } from '../store/actions/actions-types';

function Str() {
  const dipsatch = useDispatch();
  const { count, cost, message } = useSelector(state => state);

  function handleChange(e) {
    const { value } = e.target;
    dipsatch(set_cost(value));
  }

  return (
    <div className="Str">
      {message !== '' && (<p>{message}</p>)}
      <p>Count : {count}</p>
      {cost !== '' && (<p>Cost : {cost}</p>)}
      <p><button onClick={() => dipsatch(reverse())}>Reverse</button></p>
      <p>Cost :<input onChange={handleChange} type="text" name="cost" value={cost} />
        <small>Vous devez définir un cost pour mélanger la chaîne de caractères</small>
      </p>
      <p><button disabled={cost === ''} onClick={() => dipsatch(shuffle(cost))}>Shuffle</button></p>
    </div>
  );
}

export default Str;
