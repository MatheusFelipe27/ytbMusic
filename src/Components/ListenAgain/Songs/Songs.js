import './Songs.scss'
import notes from './../../../Images/notes.jpg'
import tapes from './../../../Images/tapes.jpg'
import {FaPlay} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const songs = [
    {
        name: "Notas musicais",
        artist: "Musica. Matheus",
        image: 'notes'
    },
    {
        name: "Fitas de musica",
        artist: "Musica. Matheus",
        image: 'tapes'
    },
    {
        name: "Notas musicais",
        artist: "Musica. Matheus",
        image: 'notes'
    },
    {
        name: "Fitas de musica",
        artist: "Musica. Matheus",
        image: 'tapes'
    },
    {
        name: "Notas musicais",
        artist: "Musica. Matheus",
        image: 'notes'
    },
    {
        name: "Fitas de musica",
        artist: "Musica. Matheus",
        image: 'tapes'
    },
]
const Songs = () =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)

    return(
        <div className="listenAgainSongs">
            <ul className={isCollapsed? 'songsUlCollapsed' : 'songsUl'}>
                {
                    songs.map((song, index) =>
                        <li className='songsLi' key={index}>
                            <div className="firstDivListenAgain">
                                <div className="listenAgainImgDiv">
                                    <span><FaPlay color={'white'} size={'28px'} /></span>
                                    <img className= 'listenAgainSongsPrimerImg' 
                                        src={song.image==='tapes'? tapes: notes} alt="notas musicais"
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
    )
}

export default Songs