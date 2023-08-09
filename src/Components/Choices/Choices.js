import './Choices.scss'
import { useSelector } from 'react-redux'
const Choices = () =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)

    return(
        <>
        <div className={isCollapsed?"choicesCollapsed" : "choices"}>
            <div className={isCollapsed? "choicesBtnCollapsed" : "choicesBtn"}>
                <button> Relax</button>
                <button>Energia</button>
                <button>Podcasts</button>
                <button>Treino</button>
                <button>Foco</button>
                <button>Em Trânsito</button>
            </div>
        </div>
        </>
    )
}

export default Choices