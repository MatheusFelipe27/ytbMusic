import './SecondarySongs.scss'
import ContentSecondary from './ContentSecondary/ContentSecondary'
import tapes from './../../Images/tapes.jpg'
import notes from './../../Images/notes.jpg'

const SecondarySongs= () =>{
    return(
        <>
            <div className='SecondarySongs'>
                <ul>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                   <ContentSecondary src={notes} alt="notas musicais"/> 
                   <ContentSecondary src={tapes} alt="fitas de musica"/>
                </ul>
            </div>
        </>
    )
}

export default SecondarySongs