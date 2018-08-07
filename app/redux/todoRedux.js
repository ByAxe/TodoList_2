const types = {
    ADD: 'ADD'
};

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    }
};

const initialState = {
    items: [
        {id: 0, text: 'Check email'},
        {id: 1, text: 'Take a shower'},
        {id: 2, text: 'Make a job'},
        {id: 3, text: 'Paint a fence'},
        {id: 4, text: 'Pray the God'},
        {id: 5, text: 'Take a switch'},
        {id: 6, text: 'Make a flip'},
        {id: 7, text: 'Buy a cat'},
        {id: 8, text: 'Sell a dog'},
        {id: 9, text: 'Find a girl'},
        {id: 10, text: 'Take a grid'},
        {id: 11, text: 'Make a gold'},
        {id: 12, text: 'Card a place'},
    ],
};

let i = 12;

const generateId = () => {
    i += 1;
    return i;
};

export const reducer = (state = initialState, action) => {
    const {items} = state;
    const {type, payload} = action;

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                items: [{id: generateId(), text: payload}, ...items],
            }
        }
        default: {
            return state
        }
    }
};
