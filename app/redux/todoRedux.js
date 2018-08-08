const types = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
};

export const actionCreators = {
    addItem: (item) => {
        return {type: types.ADD_ITEM, payload: item}
    },
    removeItem: (index) => {
        return {type: types.REMOVE_ITEM, payload: index}
    },
    toggleItemCompleted: (index) => {
        return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
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
        case types.ADD_ITEM: {
            return {
                ...state,
                items: [{id: generateId(), text: payload}, ...items],
            }
        }
        case types.REMOVE_ITEM: {
            return {
                ...state,
                items: items.filter((item, i) => i !== payload),
            }
        }
        case types.TOGGLE_ITEM_COMPLETED: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
};
