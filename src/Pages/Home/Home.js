import React from "react"
import Choices from "../../Components/Choices/Choices"

import "./Home.scss"
import ListenAgain from "../../Components/ListenAgain/ListenAgain"
import SecondarySongs from "../../Components/SecondarySongs/SecondarySongs"
import Songs from "../../Components/ListenAgain/Songs/Songs"

const Home=() =>{
    return(
        <>
            <div className="main">
                <Choices/>
                <ListenAgain title="Ouvir novamente" subtitle="matheus felipe" logo="M"/>
                <Songs/>
                <ListenAgain title="Escolhas rápidas" subtitle="Iniciar rádio com música"/>
                <SecondarySongs/>
                <ListenAgain title="Videoclipes recomendados"/>
                <Songs/>
                <ListenAgain title="Melhores pop" subtitle= "Sua recomendação" logo="MP"/>
                <Songs/>
                <ListenAgain title="Mixtapes criadas para você"/>
                <Songs/>
                <ListenAgain title="Covers e remixes"/>
                <SecondarySongs/>
            </div>
        </>
    )
}

export default Home