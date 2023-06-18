import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Choices from "../../Components/Choices/Choices"

import "./Home.scss"
import ListenAgain from "../../Components/ListenAgain/ListenAgain"

const Home=() =>{
    return(
        <>
        <Navbar/>
        <Choices/>
        <div className="main">
            <ListenAgain/>
        </div>
        </>
    )
}

export default Home