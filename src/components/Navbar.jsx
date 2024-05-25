import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faSearch, faMoon } from '@fortawesome/fontawesome-free-solid'
function Navbar() {
  return (
    <div className='w-full bg-violet-300 flex justify-between p-2'>
        <div className='flex gap-4'>
            <img src="https://e7.pngegg.com/pngimages/952/176/png-clipart-pokemon-pokeball-illustration-drawing-pokemon-pokeball-angle-image-file-formats.png" className='h-[30px] w-[30px] ml-4 rounded-full'/>
            <p className='font-bold text-xl'>PokeData</p>
        </div>
        <div className='flex gap-6 '>
            {/* <div className='hidden sm:block'>
                <input type='text' placeholder='Search' className='p-1 mr-2 rounded-sm bg-slate-800 px-4'/>
                <FontAwesomeIcon icon={faSearch} />
            </div> */}
            <div className='mr-4'>
                <button className=' font-medium py-1 px-2 rounded'><FontAwesomeIcon icon={faMoon} /></button>
            </div>
            <div className='mr-4 hidden sm:block'>
                <button className='bg-slate-800 hover:bg-slate-600 text-slate-300  py-1 px-2 rounded-sm'>Login</button>
            </div>
            
            <div className='mr-4 sm:hidden'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>

    </div>
  )
}

export default Navbar;