'use client'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import { GrClose } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Link from 'next/link';
import RedirectItems from './RedirectItems';
import { usePathname } from 'next/navigation';
import { Pacifico } from 'next/font/google';
const pacifico=Pacifico({weight:'400',subsets:['cyrillic']})
const Navbar = () => {
    //open clsoe menu
    const [menu,setMenu]=useState(false);
    const handleMenu=()=>{
        setMenu(!menu);
    }
    //shadow on scroll
    const [shadow,setShadow]=useState(false);
    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true);
            }
            else{
                setShadow(false);
            }
        }
        window.addEventListener('scroll',handleShadow);
    },[])
    //change nav,text color depends on the page
    const pathname=usePathname();
    const [navBg,setNavBg]=useState('#ecf0f3');
    const [linkColor,setLinkColor]=useState('black');
    useEffect(()=>{
       if(
              pathname==='/pomodoro'||
              pathname==='/pomodoro'||
              pathname==='/pomodoro'||
              pathname==='/pomodoro'
       ){
        setNavBg('transparent');
        setLinkColor('white');
       }
       else{
        setNavBg('#ecf0f3');
        setLinkColor('black');
       }
    },[pathname])

    return(
    <div style={{backgroundColor:`${navBg}`}} className={shadow? 'fixed w-full h-20 shadow-xl shadow-gray-300 z-[100]':'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link style={{color:`${linkColor}`}} href='/'><p className={`uppercase tracking-widest font-bold font-pacifico text-xl ${pacifico.className}`}>Tim.dev</p></Link>
            <div>
                <ul style={{color:`${linkColor}`}} className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden cursor-pointer' onClick={handleMenu}>
                    <IoMenu size={25} />
                </div>
            </div>
        </div>
        <div className={menu ? 'md:hidden fixed w-full h-screen top-0 left-0 bg-black/70' : ''}>
            <div className={menu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[35%] h-screen bg-slate-200 p-[40px] ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'><Image src="/assets/personbrand.png" alt="no img" width='80' height='50' /></Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleMenu}><GrClose size={20} /></div>
                    </div>
                    <div className='border-b border-gray-300 my-6'>
                        <p>Let&apos;s build something something big together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase '>
                            <Link href='/'>
                                <li className='py-4 text-sm' onClick={()=>setMenu(false)}>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm' onClick={()=>setMenu(false)}>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='py-4 text-sm' onClick={()=>setMenu(false)}>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='py-4 text-sm' onClick={()=>setMenu(false)}>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className='py-4 text-sm' onClick={()=>setMenu(false)}>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-red-500'>Let&apos;s connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[75%] '>
                                <RedirectItems redirectUrl='https://www.linkedin.com/in/gia-thinh-nguyen-557204300/' Icon={FaLinkedin} size={20} extraClass="p-3" target='_blank' />
                                <RedirectItems redirectUrl='https://github.com/gia-thinh-nguyen' Icon={FaGithub} size={20} extraClass="p-3" target='_blank'/>
                                <RedirectItems redirectUrl='#contact' Icon={SiGmail} size={20} extraClass="p-3" target='_self' />
                                <RedirectItems redirectUrl='/resume'  Icon={BsFillPersonVcardFill} size={20} extraClass="p-3" target='_self' />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default Navbar