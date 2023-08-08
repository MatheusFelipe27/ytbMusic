import {combineReducers} from 'redux'
import collapsedMenuReducer from './collapsedMenuReducer'

export const rootReducer = combineReducers({
    collapsedMenu: collapsedMenuReducer
})

