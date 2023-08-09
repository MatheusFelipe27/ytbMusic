import "./Navbar.scss";
import { VscPlayCircle } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import NavbarCollapsed from "./NavbarCollapsed/NavbarCollapsed";

const Navbar = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [navbarClass, setNavbarClass] = useState("navbar")
  const [searchColor, setSearchColor] = useState("gray")

  const dispatch = useDispatch()
  const menuIsCollapsed = useSelector(state => state.collapsedMenu)

  useEffect(()=>{
    setNavbarClass(
      `${navbarFixed? 'navbarFixed' : 'navbar'}${menuIsCollapsed.collapsedMenu? 'Collapsed': ''}`
    )
},[menuIsCollapsed, navbarFixed])

  const collapseSideBar = () =>{
    dispatch({type: 'COLLAPSED_MENU'})
  }

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
    
  useEffect(() => {
    if (navbarFixed) {
      document.getElementsByTagName("body")[0].style.background =
        "rgb(0,0,0, 1)";
      document.getElementsByTagName("body")[0].style.background =
        "linear-gradient(rgb(0,0,0,1)";
    } else {
      document.getElementsByTagName("body")[0].style.background = "rgb(2,0,36)";
      document.getElementsByTagName("body")[0].style.background = `linear-gradient(90deg, 
            rgba(2,0,36,1) 0%, 
            rgba(2,0,31,1) 3%, rgba(0,0,0,1) 20%, 
            rgba(0,0,0,1) 80%, rgba(2,0,31,1) 97%, rgba(2,0,36,1) 100%)`;
    }
  }, [navbarFixed]);

  return (
    <>
      <nav className={navbarClass}>
        {navbarClass.includes('Col')?
          <NavbarCollapsed/>
          :
          <>
            <div className="leftSide">
              <div className="menuOutside">
                <span className="menu" onClick={collapseSideBar}>
                  {" "}
                  <FiMenu size={"22px"} color={"#F0000"} />
                </span>
              </div>
              <div className="logo">
                <VscPlayCircle size={"18px"} color={"#edf0f5"} />
              </div>
              <span className="logoName">Music</span>
              <div className="search">
                <input
                  className="searchInput"
                  onFocus={changeSearchColorFocus}
                  onBlur= {changeSearchColorBlur}
                  placeholder="Pesquise músicas, álbuns, artistas, podcasts"
                />
                <span className="searchIcon">
                  <TfiSearch size={"18px"} color={searchColor} />
                </span>
              </div>
            </div>
            <div className="rightDiv">
              <div className="login">
                <span>M</span>
              </div>
            </div>
          </>
        }
      </nav>
    </>
  );
};

export default Navbar;
