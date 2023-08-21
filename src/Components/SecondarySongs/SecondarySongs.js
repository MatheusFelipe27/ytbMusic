import './SecondarySongs.scss'
import ContentSecondary from './ContentSecondary/ContentSecondary'
import { useSelector, useDispatch } from 'react-redux'
import { secondarySongs } from '../../mockData/mock'
import { useEffect } from 'react'

const SecondarySongs= ({id}) =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    const start = useSelector(state => state.pagination.find(
        val => val.componentId === id
    ))?.start
    const renderPerClick = 12
    const dispatch = useDispatch()


    useEffect(()=>{
        const songLen = { componentId: id, songsLength: secondarySongs.length }
        dispatch({type: 'GET_LEN', payload: songLen })
    },[ id, dispatch])

    return(
        <>
            <div className='SecondarySongs'>
                <ul className={isCollapsed? 'secondaryUlCollapsed' : 'secondaryUl'}>
                    {
                        secondarySongs.slice(start, start+renderPerClick).map((val, index) =>(
                            <ContentSecondary  key = {index} index = {index} songs = {val}/> 
                        ))
                    }           
                </ul>
            </div>
        </>
    )
}

export default SecondarySongs