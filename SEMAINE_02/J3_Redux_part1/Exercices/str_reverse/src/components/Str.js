import {useSelector, useDispatch} from 'react-redux';
import { reverse } from '../store/actions/actions-types';

function Str() {
    const dipsatch = useDispatch();
    const { count } = useSelector(state => state);

    return (
      <div className="Str">
          <p>Count : {count}</p>
       <p><button onClick={()=>dipsatch(reverse())}>Reverse</button></p>
      </div>
    );
  }
  
  export default Str;
  