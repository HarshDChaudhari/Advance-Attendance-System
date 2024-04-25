import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Content from '../Content/Content';
import TimeTable from '../TimeTable/TimeTable';

export default function Page() {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                <Topbar />
                
                </div>

            </div>
        </>
    );
}