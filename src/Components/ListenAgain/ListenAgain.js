import './ListenAgain.scss'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import Songs from './Songs/Songs'
 

const ListenAgain = () =>{
    return(
        <>
            <div className="listenAgain">
                <div className="listenAgainLeft">
                    <div className="listenAgainFirst"><span>M</span></div>
                    <div className="listenAgainSecond">
                        <span>MATHEUS FELIPE</span>
                        <span>Ouvir novamente</span>
                    </div>
                </div>
                <div className="listenAgainRight">
                    <button>Mais</button>
                    <button className="btnListenAgain"><HiChevronLeft size={'20px'} fontWeight={'bolder'}/></button>
                    <button className="btnListenAgain"><HiChevronRight size={'20px'} fontWeight={'bolder'}/></button>
                </div>
            </div>
            <Songs/>
        </>
    )
}

export default ListenAgain