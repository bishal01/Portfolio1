import React from 'react'
import { GoDownload } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import heroimage from '../projects/heroimage.jpg'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
import myresume from '../projects/bishal-resume.pdf'
const Hero = () => {

  const {color}=useContext(ColorContext)

    const [count, setCount] = useState(1);
    
    const [count1, setCount1] = useState(1);

  useEffect(() => {
    if (count < 5) {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 500); // Medium-fast speed
  
        return () => clearInterval(interval); // Cleanup on unmount
      }
    }, [count]);
    useEffect(() => {
        if (count1 < 10) {
            const interval = setInterval(() => {
              setCount1((prevCount) => prevCount + 1);
            }, 500); // Medium-fast speed
      
            return () => clearInterval(interval); // Cleanup on unmount
          }
        }, [count1]);

  return (


  <section>
  <div className="container mx-auto w-full flex px-5 py-24 md:flex-row flex-col max-w-screen-lg items-center  ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:order-1 order-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <br className='lg:hidden' />
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-red-600 tracking-wide">
    I am Bishal Adhikari
        <br className="inline-block" />
        <span
        className={`bg-clip-text text-transparent text-5xl lg:text-7xl font-extrabold ${
          color
            ? 'bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500'
            : 'bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700'
        }`}
      >
    FullStack Developer
</span>
      </h1>
      <p  className={`mb-8 leading-relaxed bg-clip-text text-transparent ${color ? 'bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500' : 'bg-gradient-to-r from-blue-500 via-blue-600 to-red-600'}`}>
  As a fullstack Developer and Computer Science graduate, I am a dedicated learner with a strong foundation in Javascript and Python.
  I possess problem-solving skills and value collaboration and feedback.
</p>
      <div className=" md:order-1 order-2 flex justify-center items-center">
        <a href={myresume} download="bishal_cv.pdf" >
      <button className={
            color ? 'inline-flex items-center gap-1 md:py-3 md:px-6 py-2 px-4 rounded-full text-dark-btn-text bg-dark-btn-bg border-0    focus:outline-none hover:bg-dark-btn-bg-hover  text-lg' : 'inline-flex items-center gap-1   rounded-full text-white bg-indigo-500 border-0 md:py-3 md:px-6 py-2 px-4 focus:outline-none hover:bg-indigo-600  text-lg'
        }>
            Download CV <span>
            <GoDownload  />
            </span>

        </button>
        </a>
     
               <a
    href="https://www.facebook.com/bishaladhikari123"
    target="_blank"  // Opens the link in a new tab
    rel="noopener noreferrer"  // Improves security when using target="_blank"
  >
       <button className={
            color ?
            'ml-4 inline-flex items-center justify-center rounded md:text-3xl text-xl text-dark-btn-text' : 'ml-4 text-xl inline-flex items-center justify-center rounded  md:text-3xl text-indigo-500'
        }>
          <FaFacebook  />
        </button>
  
  </a>

  <a
    href=" https://www.linkedin.com/in/bishal-adhikari01"
    target="_blank"  // Opens the link in a new tab
    rel="noopener noreferrer"  // Improves security when using target="_blank"
  >
       <button className={
            color ?
            'ml-4 inline-flex text-xl items-center justify-center rounded md:text-3xl text-dark-btn-text' : 'ml-4 inline-flex text-xl items-center justify-center rounded  md:text-3xl text-indigo-500'
        }>
          <FaLinkedin/>
        </button>
  
  </a>
  <a
    href="https://github.com/bishal01"
    target="_blank"  // Opens the link in a new tab
    rel="noopener noreferrer"  // Improves security when using target="_blank"
  >
       <button className={
            color ?
            'ml-4 inline-flex items-center justify-center text-xl rounded md:text-3xl text-dark-btn-text' : 'ml-4 text-xl inline-flex items-center justify-center rounded  md:text-3xl text-indigo-500'
        }>
          <FaGithub/>
        </button>
  
  </a>

      </div>
    </div>
    <div className=" md:order-2 order-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex ">
      <img className="object-cover object-center w-25 rounded" alt="hero" src={heroimage} />
    </div>

  </div>

  <div className="container mx-auto flex flex-col md:flex-row items-center justify-around max-w-screen-lg w-full py-10">
  <div className="text-center py-6 md:py-4">
    <h3 className={
        color ? 'text-4xl md:text-7xl font-black text-dark-nav-text-hover':'text-4xl md:text-7xl font-black text-blue-900 mb-2'
    }>1+</h3>
    <span className={
        color ? 'text-lg md:text-xl font-extrabold text-white' : 'text-lg md:text-xl font-extrabold text-gray-700'
    }>Year of Experience</span>
  </div>
  <div className="text-center py-6 md:py-4">
    <h3 className={
        color ? 'text-4xl md:text-7xl font-black text-dark-nav-text-hover':'text-4xl md:text-7xl font-black text-blue-900 mb-2'
    }>{count}+</h3>
    <span className={
        color ? 'text-lg md:text-xl font-extrabold text-white' : 'text-lg md:text-xl font-extrabold text-gray-700'
    }>Projects Completed</span>
  </div>
  <div className="text-center py-6 md:py-4">
    <h3 className={
        color ? 'text-4xl md:text-7xl font-black text-dark-nav-text-hover':'text-4xl md:text-7xl font-black text-blue-900 mb-2'
    }>{count1}+</h3>
    <span className={
        color ? 'text-lg md:text-xl font-extrabold text-white' : 'text-lg md:text-xl font-extrabold text-gray-700'
    }> Happy Clients</span>
  </div>
</div>
</section>
  )
}

export default Hero