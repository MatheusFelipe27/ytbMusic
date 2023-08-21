import './Songs.scss'
import notes from './../../../Images/notes.jpg'
import tapes from './../../../Images/tapes.jpg'
import cds from './../../../Images/cds.jpg'
import vinil from './../../../Images/vinil.jpg'
import {FaPlay} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

const mappingImage ={
    cds: cds,
    vinil: vinil,
    tapes: tapes,
    notes: notes
}
    
const Songs = ({id, songs}) =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    const start = useSelector(state => state.pagination[id].start)
    const renderPerClick = 6;
    const dispatch = useDispatch()

    useEffect(()=>{
        const songLen = { componentId: id, songsLength: songs.length }
        dispatch({type: 'GET_LEN', payload: songLen })
    },[songs.length, id, dispatch])

    return(
        <>
            <div className="listenAgainSongs">
                <ul className={isCollapsed? 'songsUlCollapsed' : 'songsUl'}>
                    {
                        songs.slice(start, start+renderPerClick).map((song, index) =>
                            <li className='songsLi' key={index}>
                                <div className="firstDivListenAgain">
                                    <div className="listenAgainImgDiv">
                                        <span><FaPlay color={'white'} size={'28px'} /></span>
                                        <img className= 'listenAgainSongsPrimerImg' 
                                            src={mappingImage[song.image]} alt="capa musical"
                                        />
                                    </div>
                                    <span className="up">{song.name}</span>
                                    <span className="down">{song.artist}</span>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Songs