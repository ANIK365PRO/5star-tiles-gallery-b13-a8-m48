import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaStarOfDavid, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-zinc-100'>
            <div className=' py-16 md:py-20 lg:py-24 px-3 md:px-20 flex flex-col md:flex-row justify-between items-center  gap-20 container mx-auto'>

            <div><p className="font-bold text-3xl flex items-center gap-1">5 <FaStarOfDavid /> Tiles</p></div>

            <div className=' flex-1 grid grid-cols-2 md:grid-cols-3 md:gap-6 '>
                <ul>
                    <li className='font-bold'>Feature</li>
                    <li>Home</li>
                    <li>All-Tiles</li>
                    <li>profile</li>
                    <li>login</li>
                    <li>logout</li>
                </ul>
            
                <ul>
                    <li className='font-bold'>Company</li>
                    <li> <a className="link link-hover">About us</a></li>
                    <li><a className="link link-hover">Contact</a></li>
                    <li> <a className="link link-hover">Whatsapp</a></li>
                    <li> <a className="link link-hover">Press kit</a></li>
                   
                    
                   
                   
                </ul>

                <ul className=''>
                    <li className='font-bold'>Socials</li>
                    <li><FaFacebook></FaFacebook></li>
                    <li><FaInstagram></FaInstagram></li>
                    <li><FaLinkedin></FaLinkedin></li>
                    <li><FaWhatsapp></FaWhatsapp></li>
                </ul>

                
                
            </div>
        </div>
                <aside className='text-center py-10 border-t border-black/40'>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by 5-Star-Tiles </p>
        </aside>
        </footer>
    );
};

export default Footer;