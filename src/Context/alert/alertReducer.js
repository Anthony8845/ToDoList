import { HIDE_ALERT, SHOW_ALERT } from "../type"

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: (state) => ({...state,visible: false}),
    DEFAULT: state=>state
}

export const alertReducer = (state, action) => {
    const handl = handlers[action.type] || handlers.DEFAULT
    return handl(state, action)
}