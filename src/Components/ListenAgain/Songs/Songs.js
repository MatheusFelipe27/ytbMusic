import './Songs.scss'
import notes from './../../../Images/notes.jpg'
import tapes from './../../../Images/tapes.jpg'
import {FaPlay} from 'react-icons/fa'

const Songs = () =>{
    return(
        <div className="listenAgainSongs">
            <ul>
                <li>
                    <div className="firstDivListenAgain">
                        <div className="listenAgainImgDiv">
                            <span><FaPlay color={'white'} size={'28px'} /></span>
                            <img className= 'listenAgainSongsPrimerImg' src={notes} alt="notas musicais"/>
                        </div>
                        <span className="up">Notas musicais</span>
                        <span className="down">Música. Matheus</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className="listenAgainImgSecDiv">
                            <span><FaPlay color={'white'} size={'28px'} /></span>
                            <img className= 'listenAgainSongsFirstImg' src={tapes} alt="fitas de musica"/>
                        </div>
                        <span className="up">Fitas de música</span>
                        <span className="down">Música. Matheus</span>
                    </div>                    
                </li>
                <li>
                    <div>
                        <div className="listenAgainImgSecDiv">
                            <span><FaPlay color={'white'} size={'28px'} /></span>
                            <img className= 'listenAgainSongsFirstImg' src={notes} alt="notas musicais"/>
                        </div>
                        <span className="up">Notas musicais</span>
                        <span className="down">Música. Matheus</span>
                    </div>                    
                </li>
                <li>
                    <div>
                        <div className="listenAgainImgSecDiv">
                            <span><FaPlay color={'white'} size={'28px'} /></span>
                            <img className= 'listenAgainSongsFirstImg' src={tapes} alt="fitas de musica"/>
                        </div>
                        <span className="up">Fitas de música</span>
                        <span className="down">Música. Matheus</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Songs