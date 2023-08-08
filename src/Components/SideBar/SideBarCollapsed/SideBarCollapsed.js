import React from 'react'
import { MdHomeFilled, MdOutlineExplore,MdLibraryMusic } from 'react-icons/md'
import './SideBarCollapsed.scss'

const SideBarCollapsed = () => {
  return(
    <>
        <div className='divSideCollapsed'> 
            <span className={'sideCollapsed'}>
                <MdHomeFilled size={'26px'} color={'white'}/>
                Início 
            </span>
        </div>    
        <div className='divSideCollapsed'>
            <span className={'sideCollapsed'}>
                <MdOutlineExplore size={'26px'} color={'white'}/>
                Explorar
            </span>
        </div>
        <div className='divSideCollapsed'>
            <span className={'sideCollapsed'}>
                <MdLibraryMusic size={'26px'} color={'white'}/>
                Biblioteca
            </span>
        </div>
    </>
  )
}

export default SideBarCollapsed