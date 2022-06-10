import { CHOICE, RESET, SET_MEMORY} from "../constants/actions";

export const set_choice = payload => {

    return {
        type : CHOICE, payload
    }
}

export const set_reset = () => {

    return {
        type : RESET
    }
}

export const set_memory = payload => {

    return {
        type : SET_MEMORY
    }
}