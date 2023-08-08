import { COLLAPSED_MENU } from "../Actions/actionType"

const initialState = {
    collapsedMenu: false
}

const collapsedMenuReducer = (state = initialState, action) =>{
    switch (action.type){
        case COLLAPSED_MENU:
            return { ...state, collapsedMenu: !state.collapsedMenu}
        
        default:
            return state;
    }
}


export default collapsedMenuReducer