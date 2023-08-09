import React from 'react'
import './NavbarCollapsed.scss'
import { VscPlayCircle } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';

const NavbarCollapsed = () => {
  const [searchColor, setSearchColor] = useState("gray")
  const [navbarFixed, setNavbarFixed] = useState(false)
  
  const dispatch = useDispatch()

  const updateNavbarPosition = () => {
    window.scrollY > 0 ? setNavbarFixed(true) : setNavbarFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNavbarPosition);
    return () => {
      window.removeEventListener("scroll", updateNavbarPosition);
    };
  }, []);

  const changeSearchColorFocus = () =>{
    setSearchColor("white")
  }
    
  const changeSearchColorBlur = () =>{
    setSearchColor("gray")
  }

  useEffect(()=>{
  }, [searchColor])

  const collapseSideBar = () =>{
  dispatch({type: 'COLLAPSED_MENU'})
  }
        
  return (
    <>  
      <div className= {navbarFixed? "leftSideCollapsed": "leftSideNotCollapsed"} >
        <div className="menuOutsideCollapsed">
          <span className="menuCollapsed" onClick={collapseSideBar}>
            {" "}
            <FiMenu size={"22px"} color={"#F0000"} />
          </span>
        </div>
        <div className="logoCollapsed">
          <VscPlayCircle size={"18px"} color={"#edf0f5"} />
        </div>
        <span className="logoNameCollapsed">Music</span>
      </div>
      <div className="searchCollapsed">
          <input
              className="searchInputCollapsed"
              onFocus={changeSearchColorFocus}
              onBlur= {changeSearchColorBlur}
              placeholder="Pesquise músicas, álbuns, artistas, podcasts"
          />
          <span className="searchIconCollapsed">
              <TfiSearch size={"18px"} color={searchColor} />
          </span>
      </div>
      <div className="rightDivCollapsed">
          <div className="loginCollapsed">
              <span>M</span>
          </div>
      </div>
    </>
  )
}

export default NavbarCollapsed