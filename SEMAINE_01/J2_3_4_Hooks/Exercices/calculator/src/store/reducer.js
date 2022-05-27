
// state <=> la source de vérité 
export const initialState = {
    number: '',
    resultat: 0,
    count : 0
};

export const MULT = 'mult';
export const ADD = 'add';
export const COUNT = 'count';

export const reducer = (state, action) => {

    switch (action.type) {
        case MULT:
            return {
                ...state
            };
        case ADD:
            return {
                ...state
            };
        case COUNT:
            console.log(action);
            return {
                ...state,
                count : state.count + action.step
            }
        default:
            return state;
    }
}