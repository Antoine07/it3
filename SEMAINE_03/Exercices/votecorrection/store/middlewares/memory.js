
import { set_memory } from '../actions_types/actions-types';
import { RESET } from '../constants/actions'

const middlewareMemory = store => next => action => {

// avant l'action  de RESET on récupère les choices 
  if (action.type === RESET ) {
    const { choices } = store.getState().c;

    store.dispatch(set_memory(choices));
  }

  const returnAction = next(action);


  return returnAction; // les autres middlewares ...
}

export default middlewareMemory;