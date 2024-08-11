import React ,{useState} from 'react'
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
import { FaLinkedin } from 'react-icons/fa';
const Hire = () => {

const [msg,setmsg]=useState(false)

const handlemsg=()=>(
setmsg(true)
)


  const {color}=useContext(ColorContext)
  return (
    <>
<section className=
{
  color ? 'bg-dark-btn-bg-hover':'bg-white'
}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className=
      {
        color ? 'sm:text-4xl text-white text-2xl font-black title-font mb-4 text-red-600"':'sm:text-4xl text-2xl font-black title-font mb-4 text-red-600'
      }>Hire Me </h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className=
            {
                color ? 'leading-7 text-sm text-gray-100':'leading-7 text-sm text-gray-600'
            }
            >Name of Company </label>
            <input type="text" id="name" name="name" required
            className={
                color ? 'w-full bg-white rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out':'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            } />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
          <label for="email" className=
            {
                color ? 'leading-7 text-sm text-gray-100':'leading-7 text-sm text-gray-600'
            }
            >Email</label>
            <input type="email" id="email" name="email" required
            
            className={
                color ? 'w-full bg-white rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out':'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            }/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className=
            {
                color?'w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out':'w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            }></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <a type='submit' onClick={
              setmsg
          } >
          <button className=
          {
            color ? 'flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-300 rounded text-lg':
            'flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          }>Send</button></a>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className=
          {
            color ? 'text-gray-400':'text-indigo-500'
          }>bishaladhikari2056@gmail.com</a>
          <p className="leading-normal my-5">Damak , Jhapa
            
          </p>
          <span className="inline-flex">
            <a  href="https://www.facebook.com/bishaladhikari123" target='_blank' className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
             <a href='' >
             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>

             </a>
              </svg>
            </a>
            <a target="_blank" href=" https://www.linkedin.com/in/bishal-adhikari01" className="ml-4 text-gray-500">
      <FaLinkedin className="w-5 h-5" />
    </a>
            <a href="https://www.instagram.com/bishal1804/" target='_blank' className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
     

  { msg && (
                      <div className="fixed inset-0 flex items-center justify-center p-4">
                      <div className="bg-blue-500 text-white p-4 rounded shadow-lg max-w-md w-full mx-4">
                        <div className="flex justify-between items-center">
                          <span>Please Contact Me On My Social Media</span>
                          <button onClick={() => setmsg(false)} className="ml-4 text-xl">
                            &times;
                          </button>
                        </div>
                      </div>
                    </div>
      )}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hire