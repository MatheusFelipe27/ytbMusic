import './Navbar.scss'
import {VscPlayCircle} from 'react-icons/vsc'
import {TfiSearch} from 'react-icons/tfi'
import {MdCastConnected} from 'react-icons/md'

const Navbar =() =>{
    return(
        <>
        <nav className="nav">
            <div className="leftSide">
                <div className='logo'>
                    <VscPlayCircle size={'24px'} color={'#edf0f5'} />
                </div>
                <h2>Music</h2>
            </div>
            <div className='midDiv'>
                <ul>
                    <li>Início</li>
                    <li>Explorar</li>
                    <li>Biblioteca</li>
                    <li className='searchMidDiv'>
                        <TfiSearch size={'20px'}/>
                        Pesquisar
                    </li>
                </ul>
            </div>
            <div className='rightDiv'>
                <ul className='listRightDiv'>
                    <li><MdCastConnected color={'#edf0f5'} size={'30px'} cursor={'pointer'}/></li>
                    <li className='login'><span>M</span></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar