import { useSelector } from 'react-redux'
import './ListenAgain.scss'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
 

const ListenAgain = ( props) =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    return(
        <>
            <div className={isCollapsed? "listenAgainCollapsed": "listenAgain"}>
                <div className="listenAgainLeft">
                    {props.logo?
                    <div className="listenAgainFirst"><span>{props.logo}</span></div>
                    :""
                    }
                    <div className="listenAgainSecond">
                        {props.subtitle?<span style={{textTransform: "uppercase"}}>{props.subtitle}</span>
                            : <span style={{color:'transparent'}}>*</span>
                        }
                        <span>{props.title}</span>
                    </div>
                </div>
                <div className="listenAgainRight">
                    <button>Mais</button>
                    <button className="btnListenAgain" onClick={()=>console.log("works")} ><HiChevronLeft size={'20px'} fontWeight={'bolder'}/></button>
                    <button className="btnListenAgain"><HiChevronRight size={'20px'} fontWeight={'bolder'}/></button>
                </div>
            </div>
        </>
    )
}

export default ListenAgain