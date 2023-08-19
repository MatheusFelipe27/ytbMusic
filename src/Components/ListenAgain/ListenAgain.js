import { useDispatch, useSelector } from 'react-redux'
import './ListenAgain.scss'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
 
const ListenAgain = ({id, logo, title, subtitle}) =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    const renderPerClick = 6
    const dispatch = useDispatch()
    const getPagination = useSelector(state => state.pagination)

    console.log(getPagination)
    
    const nextClick = () =>{
        getPagination.map(val =>{
            if(val.componentId === id){
                if(val.start + renderPerClick <val.songsLength){
                    const updated = { id: id, updatedData: val.start+ renderPerClick}
                    dispatch({type: 'PAGINATION', payload: updated})
                }
            }
        })
    }       

    const previousClick = () =>{
        getPagination.map(val =>{
            if(val.componentId === id){
                if(val.start - renderPerClick >=0){
                    const updated = { id: id, updatedData: val.start - renderPerClick}
                    dispatch({type: 'PAGINATION', payload: updated})
                }
            }
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
                    <button>Mais</button>
                    <button className="btnListenAgain" onClick={previousClick} ><HiChevronLeft size={'20px'} fontWeight={'bolder'}/></button>
                    <button className="btnListenAgain" onClick={nextClick}><HiChevronRight size={'20px'} fontWeight={'bolder'}/></button>
                </div>
            </div>
        </>
    )
}

export default ListenAgain