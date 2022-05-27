import { shuffle_str } from "../actions/actions-types";
import { REVERSE, SHUFFLE } from "../constants/actions";

const stateInit = {
    count: 0,
    phrase: "Hello World !"
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
            const cost  = action.payload;

            return {
                ...state,
                phrase: shuffle_str({ phrase: state.phrase, cost })
            };
        default:
            return state;
    }
};

export default reducer;
