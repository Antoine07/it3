import {useSelector, useDispatch} from 'react-redux';
import { reverse, shuffle } from '../store/actions/actions-types';

function Str() {
    const dipsatch = useDispatch();
    const { count } = useSelector(state => state);

    return (
      <div className="Str">
          <p>Count : {count}</p>
       <p><button onClick={()=>dipsatch(reverse())}>Reverse</button></p>
       <p><button onClick={()=>dipsatch(shuffle(10))}>Shuffle</button></p>
      </div>
    );
  }
  
  export default Str;
  