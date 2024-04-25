import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <>
            <div className='w-72 h-screen '>
                <div className='flex justify-between items-center gap-4 bg-[#4c60da] h-16 px-8'>
                    <div><img src={require("../img/logo/logo2.png")} alt="" className='size-10' /></div>
                    <div className='text-white text-xl font-bold'>Attendance</div>
                </div>
                <div className=' flex flex-col font-normal text-base text-[#6e707e]'>
                    <div>
                        <div className='px-7 py-3'>
                            <div className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={fas.faTachometerAlt} />
                            <NavLink to={"/"}>
                                DashBoard
                            </NavLink>
                            </div>
                        </div>
                        <hr class="w-64 h-[0px] mx-auto  bg-[#757575]  rounded"></hr>
                    </div>
                    <div className='py-3'>
                        <div className='px-7 text-[#b7b9cc] font-bold tracking-widest'>Features</div>
                        <div className='px-7 '>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faWindowMaximize} />
                               <p> Personal </p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faTable} />
                                <NavLink to="/timetable">
                                    TimeTable
                                </NavLink>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faWpforms} />
                                <NavLink to="/attendance">
                                    Attendance
                                </NavLink>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faReceipt} />
                                Fee
                            </div>
                        </div>
                        <hr class="w-64 h-[0px] mx-auto my-2 bg-[#757575]  rounded"></hr>
                    </div>
                    <div className=''>
                        <div className='px-7 text-[#b7b9cc] font-bold tracking-widest'>
                            ContactUs
                        </div>

                        <div className='px-7'>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faTachometerAlt} />
                                ContactUs
                            </div>

                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={fas.faTachometerAlt} />
                                Feed-Back
                            </div>

                        </div>
                        <hr class="w-64 h-[0px] mx-auto my-2 bg-[#757575]  rounded"></hr>
                    </div>
                    <div className='px-7 text-[#b7b9cc] font-bold tracking-widest'>
                        version 1.0
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar