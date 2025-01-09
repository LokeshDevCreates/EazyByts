"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';
import { Bell, Link, Menu, Moon, Settings, Sun } from 'lucide-react';
import React from 'react'
const img="/images/MyLogo.png";
const Navbar = () => {
 const dispatch=useAppDispatch(); 
 const isSidebarCollapsed =useAppSelector((state)=>state.global.isSidebarCollapsed);
    
 const isDarkMode=useAppSelector((state)=>state.global.isDarkMode);
 const toggleSidebar=()=>{
         dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
       }

 const toggleDarkMode=()=>{
    dispatch(setIsDarkMode(!isDarkMode));
 }
  return (
    <div className="flex justify-between items-center w-full mb-7">
    {/*Left Side */}
        <div className='flex justify-between items-center gap-5'>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-b;ue-100' onClick={toggleSidebar}>
                <Menu className='w-6 h-6' />
            </button>
    </div>

    {/*Right Side */}
    <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
            <div>
                <button onClick={toggleDarkMode}>
                    {isDarkMode?(
                        <Sun className='cursor-pointer text-gray-500' size={24} />
                    ):(
                        <Moon className='cursor-pointer text-gray-500' size={24} />
                    )}
                    
                </button>
            </div>
            <hr className='w-0 h-7 border border-solid border-l borger-gray-300 mx-3'/>
            <div className="flex items-center w-20 h-20 cursor-pointer rounded-full">
                <img src={img} alt="My Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className='font-semibold text-3xl'>Lokesh</span>
        </div>
    </div>
    </div>
    
  );
};

export default Navbar