import { shuffle_str } from "../actions/actions-types";
import { REVERSE, SHUFFLE, SET_COST } from "../constants/actions";

const stateInit = {
    count: 0,
    phrase: "Hello World !",
    cost : '',
    message : ''
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
        case REVERSE:
            return {
                ...state,
                count: state.count + 1,
                phrase: state.phrase.split('').reverse().join('')
            };

        case SHUFFLE:
            const cost  = parseInt( action.payload );

            if(isNaN(cost)){

                return {
                    ...state,
                    message : `Attention vous devez définir un cost entier`
                }
            }

            return {
                ...state,
                phrase: shuffle_str({ phrase: state.phrase, cost }),
                message : ''
            };

        case SET_COST:

            return {
                ...state,
                cost : action.payload,
                message : ''
            }
        default:
            return state;
    }
};

export default reducer;
