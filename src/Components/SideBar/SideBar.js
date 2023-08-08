import './SideBar.scss'
import { MdHomeFilled, MdOutlineExplore,MdLibraryMusic } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SideBarCollapsed from './SideBarCollapsed/SideBarCollapsed';

const SideBar = () =>{
    const [sideBarFixed, setSideBarFixed] = useState(false);
    const [sideBarClass, setSideBarClass] = useState("sideBar")
    const menuIsCollapsed = useSelector(state => state.collapsedMenu)
    
    useEffect(()=>{
        setSideBarClass(
            `${sideBarFixed? 'sideBarFixed' : 'sideBar'}${menuIsCollapsed.collapsedMenu? 'Collapsed': ''}`
        )
    },[menuIsCollapsed, sideBarFixed])
    
    const updateSideBarPosition = () => {
        window.scrollY > 0 ? setSideBarFixed(true) :setSideBarFixed(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateSideBarPosition);
        return () => {
          window.removeEventListener('scroll', updateSideBarPosition);
        };
      }, []);
    
    return(
        <>
            <nav className={sideBarClass}>
                {sideBarClass.includes('Col')?
                    <SideBarCollapsed/>
                    :
                    <>
                        <div> 
                            <span className={'side'}>
                                <MdHomeFilled size={'26px'} color={'white'}/>
                                Início 
                            </span>
                        </div>
                        <div>
                            <span className={'side'}>
                                <MdOutlineExplore size={'26px'} color={'white'}/>
                                Explorar
                            </span>
                        </div>
                        <div>
                            <span className={'side'}>
                                <MdLibraryMusic size={'26px'} color={'white'}/>
                                Biblioteca
                            </span>
                        </div>
                    </>
                }
            </nav>
        </>
    )
}

export default SideBar;