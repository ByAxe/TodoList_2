const types = {};

export const actionCreators = {};


const initialState = {
    items: [
        {id: 0, text: 'Check email'},
        {id: 1, text: 'Take a shower'},
        {id: 2, text: 'Make a job'},
        {id: 3, text: 'Paint a fence'},
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
