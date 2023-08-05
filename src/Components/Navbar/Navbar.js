import './Navbar.scss'
import {VscPlayCircle} from 'react-icons/vsc'
import {TfiSearch} from 'react-icons/tfi'
import {FiMenu} from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Navbar =() =>{
    const [navbarFixed, setNavbarFixed] = useState(false);

    const updateNavbarPosition = () => {
        window.scrollY > 0 ? setNavbarFixed(true) :setNavbarFixed(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateNavbarPosition);
        return () => {
          window.removeEventListener('scroll', updateNavbarPosition);
        };
    }, []);

    useEffect(()=>{
        if(navbarFixed){
            document.getElementsByTagName('body')[0].style.background = "rgb(0,0,0, 1"
            document.getElementsByTagName('body')[0].style.background= "linear-gradient(rgb(0,0,0,1)"
        }
        else{
            document.getElementsByTagName('body')[0].style.background = "rgb(2,0,36)"
            document.getElementsByTagName('body')[0].style.background =`linear-gradient(90deg, 
            rgba(2,0,36,1) 0%, 
            rgba(2,0,31,1) 3%, rgba(0,0,0,1) 20%, 
            rgba(0,0,0,1) 80%, rgba(2,0,31,1) 97%, rgba(2,0,36,1) 100%)`;
        }
    },[navbarFixed])

    return(
        <>
            <nav className={navbarFixed ? 'navbarFixed' : 'navbar'}>
                <div className="leftSide">
                    <div className='menuOutside'>
                        <span className='menu'> <FiMenu size= {'22px'} color={"#F0000"}/></span>
                    </div>
                    <div className='logo'>
                        <VscPlayCircle size={'18px'} color={'#edf0f5'} />
                    </div>
                    <span className='logoName'>Music</span>
                    <div className='search'>
                        <input className='searchInput'placeholder='Pesquise músicas, álbuns, artistas, podcasts' />
                        <span className='searchIcon'><TfiSearch size={'18px'} color={'gray'}/></span>         
                    </div>
                </div>
                <div className='rightDiv'>
                    <div className='login'><span>M</span></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar