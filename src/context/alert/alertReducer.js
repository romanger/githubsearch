import {HIDE_ALERT, SHOW_ALERT} from "../types";

const hendlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
};

export const alertReducer = (state, action) => {
    const handler = hendlers[action.type] || hendlers.DEFAULT;
    return handler(state, action);
};
