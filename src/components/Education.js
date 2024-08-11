import React from 'react'
import ccrc from '../projects/ccrclogo.jpg'
import sidd from '../projects/sidlogo.jpg'
import ku from '../projects/kulogo.png'
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
const Education = () => {
  const {color}=useContext(ColorContext)
  return (
    <>
    <section >
  <div className="container max-w-screen-lg px-5 py-24 mx-auto  ">
    <div className="text-center mb-20">
      <h1 className={
        color ? 'sm:text-5xl text-3xl font-black text-center title-font text-white mb-4':'sm:text-5xl text-3xl font-black text-center title-font text-red-600 mb-4'
      }>Education</h1>
      <div className="flex mt-6 justify-center">
      </div>
    </div>
    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
  <img
    src={ku}
    alt="ku logo"
    className="w-full h-full object-cover rounded-full"
  />
</div>
        <div className="flex-grow">
          <h2 className={
            color ? 'text-gray-50 text-lg title-font font-medium mb-3':'text-gray-900 text-lg title-font font-medium mb-3'
          }>Kathmandu University</h2>
          <p className={
            color? 'leading-relaxed text-base text-gray-300 ':'leading-relaxed text-base text-dark-btn-bg-hover '
          }>Bachelor's In Computer Science</p>
      
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
  <img
    src={ccrc}
    alt="ku logo"
    className="w-full h-full object-cover rounded-full"
  />
</div>
<div className="flex-grow">
          <h2 className={
            color ? 'text-gray-50 text-lg title-font font-medium mb-3':'text-gray-900 text-lg title-font font-medium mb-3'
          }>Capital Collage & Research Centre</h2>
          <p className={
            color? 'leading-relaxed text-base text-gray-300 ':'leading-relaxed text-base text-dark-btn-bg-hover '
          }>+2</p>
      
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
  <img
    src={sidd}
    alt="ku logo"
    className="w-full h-full object-cover rounded-full"
  />
</div>
<div className="flex-grow">
          <h2 className={
            color ? 'text-gray-50 text-lg title-font font-medium mb-3':'text-gray-900 text-lg title-font font-medium mb-3'
          }>Siddhartha Boarding Higher Secondary School</h2>
          <p className={
            color? 'leading-relaxed text-base text-gray-300 ':'leading-relaxed text-base text-dark-btn-bg-hover '
          }> School Leaving Certificate</p>
      
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Education