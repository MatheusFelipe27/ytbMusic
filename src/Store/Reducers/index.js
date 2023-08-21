import {combineReducers} from 'redux'
import collapsedMenuReducer from './collapsedMenuReducer'
import paginationReducer from './paginationReducer'

export const rootReducer = combineReducers({
    collapsedMenu: collapsedMenuReducer,
    pagination: paginationReducer
})

