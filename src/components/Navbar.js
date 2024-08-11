import React, { useState } from 'react'
import logo from '../projects/logowebsite.png'
import { RiMenu2Fill } from "react-icons/ri";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {color,handleclick}=useContext(ColorContext)
    const [open,setopen]=useState(false)
    const menufunc=()=>{
        setopen(!open)
    }
  return (
    <>
    <header className={color ? 'sticky top-0 z-50 duration-300 bg-dark-nav pt-4':'sticky top-0 z-50 duration-300 bg-light-nav pt-4' } >
        <nav className='flex justify-between items-center w-[97%] mx-auto ' >
            <div className=' ' >
            <NavLink to="/" className="no-underline">
                <img src={logo} alt="website logo" className='lg:w-32 lg:h-20 object-contain w-20 h-14  '  />
                </NavLink>
            </div>
            <div className='lg:block hidden'>
                <ul className='md:flex hidden gap-12 items-center   ' >
                <li>
                        <NavLink  className={color? 'lg:text-lg  text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : 'lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' } to='/' > Home </NavLink>
                    </li>
                    <li>
                        <NavLink className={color? 'lg:text-lg  text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : 'lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' } to='/Services' > Services </NavLink>
                    </li>
                    <li>
                        <NavLink className={color? 'lg:text-lg   text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : ' lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' } to='/work' > Projects </NavLink>
                    </li>
                  
                    <li>
                        <NavLink  className={color? 'lg:text-lg  text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : 'lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' }  to='/skills' > Skills </NavLink>
                    </li>
                    <li>
                        <NavLink className={color? 'lg:text-lg  text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : 'lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' } to='/blogs' > Blogs </NavLink>
                    </li>
                    <li>
                        <NavLink className={color? 'lg:text-lg  text-base text-dark-nav-text hover:text-dark-nav-text-hover ' : 'lg:text-lg text-base text-light-text hover:text-light-nav-text-hover ' } to='/contact' > Contact </NavLink>
                    </li>
                
                </ul>
     
            </div>

{
open && (

    <div className={
        color ?
        'lg:hidden flex min-h-[65vh]  items-center justify-center absolute left-0 top-[100%] py-10 text-center w-full bg-dark-bg '
        :
        'lg:hidden flex min-h-[65vh] items-center justify-center absolute left-0 top-[100%] py-10 text-center w-full bg-dark-bg '
    } >
        <ul className='lg:hidden   flex items-center gap-9 flex-col  text-center ' >
        <li className='text-center' >
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  px-3 py-5 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base  px-3 py-5 text-dark-nav-text hover:text-light-nav-text-hover' } to='/' > Home </NavLink>
            </li>
            <li className='text-center' >
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  px-3 py-5 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base text-dark-nav-text hover:text-light-nav-text-hover' } to='/services' > Services </NavLink>
            </li>
            <li>
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  p-4 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base text-dark-nav-text hover:text-light-nav-text-hover' } to='/work' > Work</NavLink>
            </li>
          
            <li>
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  p-4 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base text-dark-nav-text hover:text-light-nav-text-hover' }  to='/skills' > Skills </NavLink>
            </li>
            <li>
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  p-4 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base text-dark-nav-text hover:text-light-nav-text-hover' }  to='/blogs' > Blogs </NavLink>
            </li>
            <li>
            <NavLink onClick={menufunc} className={color? 'md:text-lg text-base text-dark-nav-text  p-4 hover:text-dark-nav-text-hover ' : 'md:text-lg text-base text-dark-nav-text hover:text-light-nav-text-hover' }  to='/contact' > Contact </NavLink>
            </li>

            <li>
            <div className='md:hidden   ' >
        <button className={color ? 'text-dark-btn-text bg-dark-btn-bg hover:bg-dark-btn-bg-hover py-2 px-4 rounded-full ':'text-light-text bg-light-btn-bg hover:bg-light-btn-bg-hover py-2 px-3   rounded-full  '} > 
                     <NavLink onClick={menufunc} to="hire me" className='md:text-lg text-base    '> Hire Me ! </NavLink> 
                    </button>
        </div>
            </li>
        
        </ul>

    </div>

)

}

            <div className='flex items-center gap-9 mb-1' >
                <div className='md:block hidden' >
                <button className={`inline-flex items-center justify-center rounded-full
  ${color 
    ? 'text-dark-btn-text bg-dark-btn-bg hover:bg-dark-btn-bg-hover lg:py-2 lg:px-4 py-1 px-3' 
    : 'bg-gradient-to-r from-blue-400 to-red-300 hover:from-blue-500 hover:to-red-400 lg:py-2 lg:px-4 py-1 px-3'}
  text-white transition duration-300 ease-in-out`}
>                            <NavLink to="hire me" className='md:text-lg text-base    '> Hire Me ! </NavLink> 

</button>    

</div>

<div className='flex gap-[6vh] ' >

<div>
    {
        color ?
   
        
<button  onClick={handleclick} >
<LuSun  className=' text-light-btn-text'/> 
</button> :
  <button onClick={handleclick}  >
  <FaRegMoon  className='' /> 

  </button>


}

     

 </div>
 <div className=' lg:hidden block px-3 ' >
 <button onClick={menufunc} className={color? 'text-dark-nav-text  ' :' text-light-text' } >
    <RiMenu2Fill className='text-[20px]' />
 </button>
 </div>
 </div>

</div>
            </nav>
        </header>
    </>
  )
}

export default Navbar