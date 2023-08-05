import './Songs.scss'
import notes from './../../../Images/notes.jpg'
import tapes from './../../../Images/tapes.jpg'
import {FaPlay} from 'react-icons/fa'

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
    return(
        <div className="listenAgainSongs">
            <ul>
                {
                    songs.map((song, index) =>
                        <li key={index}>
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