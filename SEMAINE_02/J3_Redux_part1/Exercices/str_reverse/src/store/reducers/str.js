import { REVERSE } from "../constants/actions";

const stateInit = {
    count: 0,
    phrase: "Hello World !"
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
        case REVERSE:

            return {
                ...state,
                count : state.count + 1,
                phrase: state.phrase.split('').reverse().join('')
            };

        default:
            return state;
    }
};

export default reducer;
