import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
       <div className=' flex flex-col gap-8 items-center justify-center h-screen w-full bg-white'>
            <div>

            <p className='text-6xl pb-20'>Advance Attendance System</p>
            <div className='flex  justify-between  w-full px-28 '>
                <a href="/Login" className='px-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center'>Login</a>
                <a href="/Signup" className='px-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center'>Signup</a>
            </div>
            </div>
       </div>
        </>


    );
}