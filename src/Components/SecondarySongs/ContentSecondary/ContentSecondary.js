import './ContentSecondary.scss'
import { BiDislike, BiLike, BiDotsVerticalRounded} from 'react-icons/bi'
import { FaPlay } from 'react-icons/fa'

const  ContentSecondary= (props) =>{

    return(
        
        <li>
            <div className='contentSecondary'>
                <div className='imgPlaceSecondary'>
                    <div className='imgInsideSecondary'>
                        <span className='playSecondary'><FaPlay size={'16px'} /></span>
                        <img className="imgSecondary" src={props.src} alt={props.alt}/>
                    </div>
                    <div className='textSecondary'>
                        <span className='upSecondary'>Not Today</span>
                        <span className='downSecondary'>Matheus Felipe</span>
                    </div>
                </div>
                <div className='btnSecondary'>
                    <span><BiDislike size={'22px'}/></span>
                    <span> <BiLike size={'22px'} /></span>
                    <span> <BiDotsVerticalRounded size={'22px'} /></span>
                </div>
            </div>
        </li>
    )
}
export default ContentSecondary