import './ContentSecondary.scss'
import { BiDislike, BiLike, BiDotsVerticalRounded} from 'react-icons/bi'
import { FaPlay } from 'react-icons/fa'
import tapes from './../../../Images/tapes.jpg'
import notes from './../../../Images/notes.jpg'
import cds from './../../../Images/cds.jpg'
import vinil from './../../../Images/vinil.jpg'


const getImage = {
    cds: cds,
    tapes: tapes,
    vinil: vinil,
    notes: notes
}
const ContentSecondary= ({songs}) =>{
    
    return(   
        <li className='secondaryLi'>
            <div className='contentSecondary'>
                <div className='imgPlaceSecondary'>
                    <div className='imgInsideSecondary'>
                        <span className='playSecondary'><FaPlay size={'16px'} /></span>
                        <img className="imgSecondary" src={getImage[songs.image]} alt={songs.alt}/>
                    </div>
                    <div className='textSecondary'>
                        <span className='upSecondary'>{songs.name}</span>
                        <span className='downSecondary'>{songs.artist}</span>
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