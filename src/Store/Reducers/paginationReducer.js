import { 
    PAGINATION,
    GET_LEN
} from "../Actions/actionType"

const initialState =[
    { componentId: 0, start: 0, songsLength: 0 },
    { componentId: 1, start: 0, songsLength: 0 },
    { componentId: 2, start: 0, songsLength: 0 },
    { componentId: 3, start: 0, songsLength: 0 },

]

const paginationReducer = (state = initialState, action) =>{
    switch(action.type){
        case PAGINATION:
            const { id, updatedData } = action.payload;
            return state.map(state => 
                state.componentId === id ? 
                { ...state, start: updatedData } 
                : 
                state
            );

        case GET_LEN:
            const { componentId, songsLength } = action.payload;
            return state.map(state => 
                state.componentId === componentId ? 
                { ...state, songsLength: songsLength } 
                : 
                state
            );   

        default:
            return state;
    }
}

export default paginationReducer