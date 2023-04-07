
const defaultState = {
    characters: [],
    filteredCharacters: []
}

export const charactersReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'INIT_CHARACTERS':
            return {...state, characters: action.payload}
        case 'SET_FILTERED_CHARACTERS':
            return {...state, filteredCharacters: action.payload}
        default:
            return state
    }
}