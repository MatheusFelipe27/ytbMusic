import React from "react"
import Choices from "../../Components/Choices/Choices"

import "./Home.scss"
import ListenAgain from "../../Components/ListenAgain/ListenAgain"
import SecondarySongs from "../../Components/SecondarySongs/SecondarySongs"
import Songs from "../../Components/ListenAgain/Songs/Songs"
import { useSelector } from "react-redux"
import { songs, songsTwo, songsThree, songsFour } from "../../mockData/mock"


const Home=() =>{
    const isCollapsed = useSelector(state => state.collapsedMenu.collapsedMenu)

    return(
        <>
            <div className={isCollapsed? "mainCollapsed" : "main"}>
                <Choices/>
                <ListenAgain id={0} title="Ouvir novamente" subtitle="matheus felipe" logo="M"/>
                <Songs id={0} songs={songs}/>

                <ListenAgain id={10}title="Escolhas rápidas" subtitle="Iniciar rádio com música"/>
                <SecondarySongs/>
                
                <ListenAgain id={1} title="Videoclipes recomendados"/>
                <Songs id={1} songs={songsTwo}/>
                <ListenAgain id={2} title="Melhores pop" subtitle= "Sua recomendação" logo="MP"/>
                <Songs id={2} songs={songsThree}/>
                <ListenAgain id={3} title="Mixtapes criadas para você"/>
                <Songs id={3} songs={songsFour}/>

                <ListenAgain id= {11} title="Covers e remixes"/>
                <SecondarySongs id={11}/>
            </div>
        </>
    )
}

export default Home