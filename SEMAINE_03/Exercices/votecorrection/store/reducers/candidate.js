import { CHOICE, RESET } from "../constants/actions";

const stateInit = {
    candidates: [
        { choice_1: "Alan", choice_2: "Juliette" },
        { choice_1: "Phi", choice_2: "Bernard" },
        { choice_1: "Lisa", choice_2: "Elise" },
        { choice_1: "Cecilia", choice_2: "Alice" },
    ],
    count: 0,
    max: 4,
    choices: []
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {

        case CHOICE:
            const choices = state.choices.map(choice => ({ ...choice }));
            choices.push({ id: Date.now().toString() + Math.random() * 10000, choice: action.payload })

            return {
                ...state,
                choices,
                count: state.count + 1
            }

        case RESET:

            return {
                ...state,
                ...stateInit
            }

        default:
            return state;
    }
};

export default reducer;