import { useDispatch, useSelector } from 'react-redux'
import './ListenAgain.scss'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import { useState } from 'react'
 
const ListenAgain = ({id, logo, title, subtitle}) =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    const dispatch = useDispatch()
    const getPagination = useSelector(state => state.pagination)
    const [enableRight, setEnableRight] = useState(true)
    const [enableLeft, setEnableLeft] = useState(false)


    
    const nextClick = () =>{
        getPagination.map(val =>{
            if(val.componentId === id){
                const renderPerClick = id >5 ? 12 : 6
                if(val.start + renderPerClick <val.songsLength){
                    setEnableLeft(true)
                    const updated = { id: id, updatedData: val.start+ renderPerClick}
                    dispatch({type: 'PAGINATION', payload: updated})
                }
                if(val.start + renderPerClick*2 >val.songsLength){
                    setEnableRight(false)
                    setEnableLeft(true)
                }
            }
            return ''
        })
    }       

    const previousClick = () =>{
        getPagination.map(val =>{
            if(val.componentId === id){
                const renderPerClick = id >5 ? 12 : 6
                if(val.start - renderPerClick >=0){
                    setEnableRight(true)
                    const updated = { id: id, updatedData: val.start - renderPerClick}
                    dispatch({type: 'PAGINATION', payload: updated})
                }
                if(val.start - renderPerClick*2 <0){
                    setEnableLeft(false)
                    setEnableRight(true)
                }
            }
            return ''
        })   
    }
    
    return(
        <>
            <div className={isCollapsed? "listenAgainCollapsed": "listenAgain"}>
                <div className="listenAgainLeft">
                    {logo?
                    <div className="listenAgainFirst"><span>{logo}</span></div>
                    :""
                    }
                    <div className="listenAgainSecond">
                        {subtitle?<span style={{textTransform: "uppercase"}}>{subtitle}</span>
                            : <span style={{color:'transparent'}}>*</span>
                        }
                        <span>{title}</span>
                    </div>
                </div>
                <div className="listenAgainRight">
                    <button className='mais'>Mais</button>
                    <button 
                        className= {enableLeft? "btnListenAgain" : "btnListenAgainDisabled"} 
                        onClick={previousClick} 
                        disabled = {!enableLeft} 
                    >
                        <HiChevronLeft 
                        size={'20px'} fontWeight={'bolder'}/>
                    </button>
                    <button 
                        className= {enableRight? "btnListenAgain" : "btnListenAgainDisabled"} 
                        onClick={nextClick}
                        disabled = {!enableRight}
                    >
                        <HiChevronRight size={'20px'} 
                        fontWeight={'bolder'}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListenAgain