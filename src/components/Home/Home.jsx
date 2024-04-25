import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
       <div className=' flex flex-col gap-8 items-center justify-center h-screen w-full bg-pink-500'>
            <div>

            <p className='text-6xl'>Advance Attendance System</p>
            <div className='flex  justify-between border w-full px-28  '>
                <a href="/Login" className='button'>Login</a>
                <a href="/Signup" className='button'>Signup</a>
            </div>
            </div>
       </div>
        </>


    );
}