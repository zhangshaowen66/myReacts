const iniState = {
    id: 1
}

export  default  (state = iniState, action) => {
    switch (action.type) {
        case 'test':
            return {...state, id: action.data}
        default:
            return state
    }
}