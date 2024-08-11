import React from 'react'
import ecommerce from '../projects/Ecommerce-Django.webm'
import note from '../projects/noteapplication.webm'
import covid from '../projects/covid19app.png'
import reduxapp from '../projects/redux.png'
import emailverify from '../projects/verifyemail.png'
import crm from '../projects/crm.jpeg'
import sunset from '../projects/sunset.mp4'
import customer from '../projects/customermanage.jpg'
import { useState } from 'react'
import { useContext } from 'react';
import { ColorContext } from '../ColorProvider';
import { NavLink } from 'react-router-dom'


const Work = () => {
  const {color}=useContext(ColorContext)
    const [filter, setFilter] = useState('All');
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filter) => {
      setActiveFilter(filter);
    };
 
    const items = [
        { id: 1, type: 'django' ,tool:'django' ,goto:'https://github.com/bishal01/ecom-website',name:'Ecommerce' ,src: ecommerce,alt:'ecommerce website using djano' ,description: 'This e-commerce website features functionality that allows users to select products for their cart using AJAX and JavaScript, with a database that securely handles user payment information.' },
                 { id: 2, type: 'react',tool:'react' ,goto:'https://github.com/bishal01/Covid-19-Tracker',name:'Covid-19 Tracker' ,src: covid, alt:'Covid-19 tracker using react',description: 'This a ReactJS COVID Tracker App that I created as a single-page application.\n-It provides details on COVID data based on the API provided by https://disease.sh/.' },
        { id: 3, type: 'react',tool:'React' ,goto:'https://github.com/bishal01/Hotel-website' ,name:'Sunset Lodge Website' ,src: sunset, alt:'Hotel Website' ,description: 'I have created the hotel website using react and material ui Its mobile friendly and have pretty goodlooking UI .\n' },
        { id: 4, type: 'reactdjango',goto:'https://github.com/bishal01/Note' ,tool:'React & Django' ,name:'Note Application' ,src: note, alt:'Note Application',description: 'This app has a feature where users can write, edit and delete notes.\n-APIs have been created using the Django Framework.\n-The data is being fetched in React using RESTful APIs.\n' },
  {id:5,type:'django',tool:'dango',goto:'https://github.com/bishal01/customer2_management' ,name:'Customer Management',src:customer, alt:'Customer Management Website',description:'This website has a feature where the administrator can add customer details and their orders to the database, and the web page displays the rendered data.\n'  },

{
    id:6,type:'django',tool:'django',goto:'https://github.com/bishal01/Authentication-email-django' ,name:'Password Authentication',src:emailverify,alt:'Verify email project using django' , description :'This project is designed to securely log in users by validating their email and includes a feature for resetting passwords'

},
{
    id:'7' ,type:'django',tool:'django',goto:'https://github.com/bishal01/Collag-management-system' ,name :'CRM Application',src:crm, alt:'student management system',description:'This website includes features for managing teachers, tracking student performance, and monitoring attendance, all developed using Django'
},
{
    id:'8' , type:'react',tool:'react',goto:'https://github.com/bishal01/Essential' ,name:'Essential Ecom Website',src:reduxapp,alt:"projects that use redux" ,description:'This website is built using React and Redux, with state management handled by Redux'
}
    ];

    const filteredItems = filter === 'All' ? items : items.filter(item => {
        if (filter === 'React&Django') return item.type === 'reactdjango';
        if (filter === 'OnlyReact') return item.type === 'react';
        if (filter === 'OnlyDjango') return item.type === 'django';
        return false;
      });
  return (
    <>
<section className="text-gray-600   bg-gradient-to-r from-blue-900 via-gray-700 to-gray-900 z-90 ">
    <div className={
        color ? 'font-black text-center title-font text-white w-full py-8 sm:text-5xl text-3xl':'sm:text-5xl text-3xl font-black text-center title-font text-red-600 w-full py-8'
    } >
         <h3>Projects</h3> 
     </div>
<div className="font-[sans-serif] w-max mx-auto border-2 border-red-500 rounded-lg overflow-hidden flex m-4">
<button
        type="button"
        onClick={() =>{
          setFilter('All')
          handleFilterClick('All')}}
        className={`px-5 py-2.5 text-lg tracking-wider font-semibold border-r-2 border-red-500 outline-none transition-all ${
          activeFilter === 'All' ? 'bg-[#333] text-white' : 'text-[#fff] hover:bg-[#333] hover:text-white'
        }`}
      >
        All
      </button>
      <button
        type="button"
        onClick={() =>
          {
            setFilter('React&Django')
             handleFilterClick('React&Django')}}
        className={`px-5 py-2.5 text-lg tracking-wider font-semibold border-r-2 border-red-500 outline-none transition-all ${
          activeFilter === 'React&Django' ? 'bg-[#333] text-white' : 'text-[#fff] hover:bg-[#333] hover:text-white'
        }`}
      >
        React & Django
      </button>
      <button
        type="button"
        onClick={() => 
        {
          setFilter('OnlyReact')
          handleFilterClick('OnlyReact')}}
        className={`px-5 py-2.5 text-lg tracking-wider font-semibold border-r-2 border-red-500 outline-none transition-all ${
          activeFilter === 'OnlyReact' ? 'bg-[#333] text-white' : 'text-[#fff] hover:bg-[#333] hover:text-white'
        }`}
      >
        React
      </button>
      <button
        type="button"
        onClick={() => 
        {
          handleFilterClick('OnlyDjango')
          setFilter('OnlyDjango')

        }

        }
        className={`px-5 py-2.5 text-lg md:block hidden tracking-wider font-semibold border-none outline-none transition-all ${
          activeFilter === 'OnlyDjango' ? 'bg-[#333] text-white' : 'text-[#fff] hover:bg-[#333] hover:text-white'
        }`}
      >
        Django
      </button>
    </div>
    
  
  <div className="container px-5 lg:py-[7vh] py-[7vh] mx-auto max-w-screen-lg">
    <div className="flex flex-wrap -m-4">

        {
            filteredItems.map((item,id)=>(
                <div key={id}  className="p-4 md:w-1/2">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {item.src.endsWith('.mp4') || item.src.endsWith('.webm') ?
                  <video className="lg:h-[35vh] md:h-[30vh] w-full object-cover object-center" controls>
                  <source src={item.src} type={item.src.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} />
                </video> :
                  <img className="lg:h-[35vh] md:h-[30vh] w-full object-cover object-center" src={item.src} alt="blog" />
                }
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.tool}</h2>
                    <h1 className="title-font text-lg  text-red-600 font-extrabold mb-3">{item.name}</h1>
                    <p className="leading-relaxed mb-3 text-gray-300">{item.description}</p>
                    <div className="flex items-center flex-wrap ">
                      <NavLink to={item.goto} target='_blank' className="text-indigo-500 inline-flex  items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </NavLink>
                
                   
                    </div>
                  </div>
                </div>
              </div>
              
              

            ))
        }
   
  







    </div>
  </div>
</section>

    </>
  )
}

export default Work