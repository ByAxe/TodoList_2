const types = {};

export const actionCreators = {};


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

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default: {
            return state
        }
    }
};
