import { SET_MEMORY } from "../constants/actions";

const stateInit = {
   choices : [

   ]
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case SET_MEMORY:
            const choices = state.choices.map(choice => ({...choice }))
            choices.push( action.payload ); 

            return {
                ...state,
                choices 
            }
      
        default:
            return state;
    }
};

export default reducer;