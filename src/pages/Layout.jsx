import React from 'react'
import Sidebar from '../UI/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className='p-6 flex-[4]'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout