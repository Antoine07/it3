
// state <=> la source de vérité 
export const initialState = {
    number1: '',
    number2: '',
    resultat: null,
    count: 0
};

export const MULT = 'mult';
export const ADD = 'add';
export const COUNT = 'count';
export const SET_NUMBER = 'SET_NUMBER';

export const reducer = (state, action) => {

    switch (action.type) {
        case MULT:
            return {
                ...state
            };
        case ADD:
            const n1 = parseFloat(state.number1) ;
            const n2 = parseFloat(state.number2) ;

            if(isNaN(n1) || isNaN(n2)){

                return {
                    ...state
                }
            }

            return {
                ...state,
                resultat : n1 + n2,
                number1 : '',
                number2 : ''
            };
        case COUNT:
            return {
                ...state,
                count: state.count + action.step
            };
        case SET_NUMBER:
            const { name, number } = action;

            return {
                ...state,
                [name]: number,
                resultat : null
            };

        default:
            return state;
    }
}