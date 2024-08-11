import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';

import { ColorProvider } from './ColorProvider';
;

const MainContent = () => {


 


  return (
    <>

   <ColorProvider>
   <Navbar     />
   <Outlet    />


   <Footer  />
   </ColorProvider>




   
    </>
  )
}


const Main = () => {
  return (
    <ColorProvider>
    <MainContent/>
    </ColorProvider>
  )
}


export default Main