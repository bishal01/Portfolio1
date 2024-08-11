import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Skills from './components/Skills'
import Contact from "./components/Contact";
import { useContext } from 'react';
import { ColorContext } from './ColorProvider';
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState ,useEffect} from "react";
function App() {
  const{color}=useContext(ColorContext)
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  
  return (
    <div className={ color ? 'bg-black font-body ':'bg-light-bg font-body   ' }>
    {isVisible && (
 <button
 onClick={scrollToTop}
 className={
   color ? 'fixed bottom-[15vh] right-4 md:p-4 p-2 text-white bg-red-600 rounded-full shadow-lg transform z-[20vh] '
     : 'fixed bottom-[15vh] right-4 md:p-4 p-2 text-white bg-blue-600 rounded-full shadow-lg z-[20vh] '
 }
 style={{ zIndex: 1000 }}

>
 <MdKeyboardArrowUp className="  md:text-[25px] text-[23px] " />
</button>
   )}
      


 
    
     <Hero />

      <Services    />
      <Work />
      <Education  />
      <Blog   />
      <Skills   />
      <Contact   />
   
   

    </div>
  );
}

export default App;
