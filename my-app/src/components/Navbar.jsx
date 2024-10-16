import React from 'react'
import { CiFilter } from "react-icons/ci";
import Sidebar from './Sidebar';
import { MdEdit } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
const Navbar = ({userId}) => {
  return (
    <nav className='bg-gray-400 h-30 '>
      <div className='left flex gap-2'>
        <img className='size-10' src="/graph-icon.png" alt="" />
        <div>

          <h1 className='font-bold text-3xl'>Dashboard</h1>
          <p className='font-bold text-2xl'>Builder</p>
        </div>
        <div className='flex gap-4 mt-6 ml-10 pb-2'>
          <p className='flex gap-2 '><span className='text-indigo-800 cursor-pointer text-xl'>Filter</span>
            <i className='pt-2'><CiFilter/></i>
          </p>
          <p className='flex gap-2'><span className='text-indigo-800 cursor-pointer text-xl'>Edit</span>
            <i className='pt-2'><MdEdit/></i>
          </p>
        </div>
      </div>
      <div className='flex '>

      <Sidebar userId={userId}/>
      </div>
    </nav>
  )
}

export default Navbar
