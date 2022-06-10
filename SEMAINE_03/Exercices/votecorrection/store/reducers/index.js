import { combineReducers } from 'redux';

import candidate from './candidate';
import memory from './memory';

export default combineReducers({
  c : candidate,
  m : memory
});