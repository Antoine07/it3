import { REVERSE, SHUFFLE } from "../constants/actions";

export const reverse = () => ({ type: REVERSE });
export const shuffle = payload => ({ type: SHUFFLE, payload });


export function shuffle_str({ cost, phrase }) {
    let res = [];

    const generateCost = () => {
        const res = [];
        const len = phrase.length;
        let i = Math.floor(Math.random() * len);
        const keys = [...Array(len).keys()]; // tableau de la longueur de la phrase
        const p = phrase.split('');

        while (res.length !== len) {
            let ch = p[i];
            while (keys.includes(i) === false) {
                i = Math.floor(Math.random() * len);
                ch = p[i];
            }

            const index = keys.indexOf(i);
            keys.splice(index, 1);

            res.push(ch);

        }
        return res;
    }

    while(cost > 0){
        cost--;
        res = generateCost();
    }

    return res.join('');
}   