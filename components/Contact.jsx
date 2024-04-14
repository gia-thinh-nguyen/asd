'use client'
import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Link from 'next/link';
import { PiCaretDoubleUp } from "react-icons/pi";
import RedirectItems from './RedirectItems';
import { BiPhone } from 'react-icons/bi';

//42d69e8d-b33f-4367-a466-277934a6c28b

const Contact = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "42d69e8d-b33f-4367-a466-277934a6c28b",
                name: e.target.name.value,
                phone: e.target.phone.value, 
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
            <p className='text-xl tracking-widest uppercase text-red-500'>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4"> {/*left*/} 
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img src="/assets/mo.jpg" alt="contact" className='w-full h-full object-cover rounded-xl hover:scale-105 ease-in duration-300'/>
                        </div>
                        <div>
                            <h2 className='py-3'>Tim Nguyen</h2>
                        </div>                     
                        <div className='py-5'>
                            <p>I value open comunication and more than happy to be given any inquiries, feed back, or collaboration oppurtunities. Please don't hesitate to reachout by filling the contact form.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8 text-xl text-red-500'>Let's connect</p>
                            <div className='flex justify-between item-center py-4'>
                            <RedirectItems redirectUrl='https://www.linkedin.com/in/gia-thinh-nguyen-557204300/' Icon={FaLinkedin} size={28} extraClass="p-3" target='_blank' />
                            <RedirectItems redirectUrl='https://github.com/gia-thinh-nguyen' Icon={FaGithub} size={28} extraClass="p-3" target='_blank'/>
                            <RedirectItems redirectUrl='#contact' Icon={SiGmail} size={28} extraClass="p-3" target='_self' />
                            <RedirectItems redirectUrl='/resume'  Icon={BsFillPersonVcardFill} size={28} extraClass="p-3" target='_self' />      
                            </div>
                        </div>
                    </div>
                </div> {/*right*/}
                <div className='col-span-3 lg:col-span-3 w-full h-full shadow-xl shadow-gray-600 rounded-xl lg:py-4 bg-gray-100'>
                    <div className='p-4'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label  className='uppercase text-sm py-2'>Name</label>
                                    <input type="text" name="name" className='border-2 rounded-lg p-3 flex border-gray-400' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='uppercase text-sm py-2'>Phone number</label>
                                    <input type="text" name='phone' className='border-2 rounded-lg p-3 flex border-gray-400' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email" name="email" className='border-2 rounded-lg p-3 flex w-full border-gray-400' required/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex w-full border-gray-400' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea name="message" className='border-2 rounded-lg p-3 border-gray-400' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4' type='submit'>Send a message</button>
                        </form>
                    </div>
                    
                </div>            
            </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <PiCaretDoubleUp size={30}/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Contact