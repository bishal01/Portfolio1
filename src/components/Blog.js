import React from 'react'
import rafting from '../projects/rafting.mp4'
import hiking from '../projects/hiking.mp4'
import rain from '../projects/rainterai.mp4'
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
const Blog = () => {
  const{color}=useContext(ColorContext)

  return (
    <>

    <section className={
        color ? 'bg-blue-950 z-90 py-20':'bg-[#E6F7FF] z-50 py-20 '
    }>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={
            color ? 'font-manrope text-4xl font-bold text-white text-center mb-14':'font-manrope text-4xl font-bold text-red-600 text-center mb-14'
          }>My Recent Blogs</h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
             <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
             <div className="flex items-center mb-6">
  <video src={rafting} className="rounded-lg w-full" controls></video>
</div>
              <div className="block">
                  <h4 className={
                    color ? 'text-red-600 font-extrabold text-lg leading-8 mb-9':'text-gray-900 text-lg font-extrabold leading-8 mb-9'
                    
                  }>Rafting In Trisuli</h4>
                  <div className="flex items-center justify-between  font-medium">
                      <h6 className={
                        color ?'text-sm text-white':'text-sm text-gray-500'
                      }>By Bishal Adhikari</h6>
                      <span className={
                        color?'text-sm text-gray-400':'text-sm text-indigo-600'
                      }>1 year ago</span>
                  </div>
              </div>
             </div>
             <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
             <div className="flex items-center mb-6">
  <video src={hiking} className="rounded-lg w-full" controls></video>
</div>
<div className="block">
                  <h4 className={
                    color ? 'text-red-600 font-extrabold text-lg leading-8 mb-9':'text-gray-900 font-extrabold text-lg leading-8 mb-9'
                    
                  }>Hiking In The Middle of Jungle</h4>
                  <div className="flex items-center justify-between  font-medium">
                      <h6 className={
                        color ?'text-sm text-white':'text-sm text-gray-500'
                      }>By John</h6>
                      <span className={
                        color?'text-sm text-gray-400':'text-sm text-indigo-600'
                      }>1 year ago</span>
                  </div>
              </div>
             </div>
             <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
             <div className="flex items-center mb-6">
  <video src={rain} className="rounded-lg w-full" controls></video>
</div>
<div className="block">
                  <h4 className={
                    color ? 'text-red-600 font-extrabold text-lg leading-8 mb-9 f':'text-gray-900 font-extrabold text-lg leading-8 mb-9'
                    
                  }>Monsoon In Terai</h4>
                  <div className="flex items-center justify-between  font-medium">
                      <h6 className={
                        color ?'text-sm text-white':'text-sm text-gray-500'
                      }>By Bishal Adhikari</h6>
                      <span className={
                        color?'text-sm text-gray-400':'text-sm text-indigo-600'
                      }>1 year ago</span>
                  </div>
              </div>
             </div>
          </div>
        </div>
    </section>
    
    </>
  )
}

export default Blog