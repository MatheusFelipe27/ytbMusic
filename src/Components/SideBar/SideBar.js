import './SideBar.scss'
import { MdHomeFilled, MdOutlineExplore,MdLibraryMusic } from "react-icons/md";
import { useEffect, useState } from 'react';

const SideBar = () =>{
    const [sideBarFixed, setSideBarFixed] = useState(false);
    
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
            <nav className={sideBarFixed? 'sideBarFixed' : 'sideBar'}>
                <div> 
                    <span className='side'>
                        <MdHomeFilled size={'26px'} color={'white'}/>
                        Inicio 
                    </span>
                </div>
                <div>
                    <span className='side'>
                        <MdOutlineExplore size={'26px'} color={'white'}/>
                        Explorar
                    </span>
                </div>
                <div>
                    <span className='side'>
                        <MdLibraryMusic size={'26px'} color={'white'}/>
                        Biblioteca
                    </span>
                </div>
            </nav>
        </>
    )
}

export default SideBar;