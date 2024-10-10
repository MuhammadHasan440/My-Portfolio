import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { FaClipboardList, FaEnvelope, FaGithub, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="relative bg-black shadow elative flex items-center py-0 px-0 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between text-orange-500">
                    <h1 className="text-lg font-bold ">MUHAMMAD HASAN</h1>
                    <div className="flex lg:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            type="button" 
                            className="text-orange-500 hover:text-orange-400 focus:outline-none" 
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                <div className="flex flex-col md:flex-row md:mx-6">
    <Link className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full md:mr-4" 
          to={''} onClick={handleLinkClick}>
        <BiHome className="mr-2" /> Home
    </Link>
    <Link className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full md:mr-4" 
          to={'about'} onClick={handleLinkClick}>
        <FaInfoCircle className="mr-2" /> About
    </Link>
    <Link className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full md:mr-4" 
          to={'projects'} onClick={handleLinkClick}>
        <FaProjectDiagram className="mr-2" /> Projects
    </Link>
    <Link className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full md:mr-4" 
          to={'experience'} onClick={handleLinkClick}>
        <FaClipboardList className="mr-2" /> Experience
    </Link>
    <Link className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full md:mr-4" 
          to={'contact'} onClick={handleLinkClick}>
        <FaEnvelope className="mr-2" /> Contact
    </Link>
    <a className="relative flex items-center py-2 px-2 text-1xl font-semibold text-orange-500 transition-colors duration-300 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-[orange] after:transition-all after:duration-300 hover:after:w-full" 
          href="https://github.com/MuhammadHasan440" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
        <FaGithub className="mr-2" /> GitHub
    </a>
</div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
