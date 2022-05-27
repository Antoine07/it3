import Str from "./components/Str";
import {useSelector } from 'react-redux';

function App() {
  const {phrase} = useSelector(state => state);
  return (
    <div className="App">
      <p>{phrase}</p>
     <Str />
    </div>
  );
}

export default App;
