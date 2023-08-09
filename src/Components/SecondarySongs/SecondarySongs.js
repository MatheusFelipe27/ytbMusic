import './SecondarySongs.scss'
import ContentSecondary from './ContentSecondary/ContentSecondary'
import tapes from './../../Images/tapes.jpg'
import notes from './../../Images/notes.jpg'
import { useSelector } from 'react-redux'

const SecondarySongs= () =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)
    return(
        <>
            <div className='SecondarySongs'>
                <ul className={isCollapsed? 'secondaryUlCollapsed' : 'secondaryUl'}>
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
{/* 
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
                   <ContentSecondary src={tapes} alt="fitas de musica"/> */}
                   
                </ul>
            </div>
        </>
    )
}

export default SecondarySongs