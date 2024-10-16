
import React from 'react'
import Navbar from './Navbar'
import Linechart from './Linechart'
import StackedBarChart from './stackedchart'
import BubbleChart from './Bubblechart'
import DonutChart from './Donutchart'
import { io } from 'socket.io-client';
import { CiLocationArrow1 } from "react-icons/ci"
import * as d3 from "d3";
import { useState, useEffect,useRef} from 'react'
import gsap from 'gsap';
const dashboard = () => {
  const [number, setNumber] = useState('10');
  const headingRef = useRef(null);
  useEffect(() => {
    // Establish socket connection
    const socket = io('https://data.gdscnsut.com');
    
    // Listen for 'random_number' event and update the state
    socket.on('random_number', (data) => {
      setNumber(data.number);
    });
   

    // Clean up the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    gsap.fromTo(
      headingRef.current, 
      { opacity: 0, scale: 0.5 }, // Starting values
      { opacity: 1, scale: 1, duration: 2, ease: 'power3.out' } // Ending values
    );
  }, [])
  

  return (
    <>
      <Navbar  />
      <div ref={headingRef} className='flex gap-2 '>
        <div className='bg-orange-600 mt-2 w-1/4 h-20 border border-dotted flex justify-center gap-2'>
          <i className='fixed'><CiLocationArrow1 /></i>
          <h1 className='text-3xl'>{number * Math.ceil(Math.random() * 1000)}</h1>
          <span className='mt-6 pr-20 lg:text-[15px] md:text-[10px] sm:text-[9px]  '>No of users currently subscribed</span>
        </div>
        <div className='bg-green-600 mt-2 w-1/4 h-20 border border-dotted flex justify-center gap-2'>
          <i><CiLocationArrow1 /></i>
          <h1 className='text-3xl'>{number * Math.ceil(Math.random() * 100)}</h1>
          <span className='mt-6 pr-20 lg:text-[15px] md:text-[10px] sm:text-[9px]'>No of orders in last month</span>
        </div>
        <div className='bg-blue-600 mt-2 w-1/4 h-20 border border-dotted flex justify-center gap-2'>
          <i><CiLocationArrow1 /></i>
          <h1 className='text-3xl'>{number * Math.ceil(Math.random() * 10)}</h1>
          <span className='mt-6 pr-20 lg:text-[15px] md:text-[10px] sm:text-[9px]'>Average profit previous month</span>
        </div>
        <div className='bg-indigo-800 mt-2 w-1/4 h-20 border border-dotted flex justify-center gap-2'>
          <i><CiLocationArrow1 /></i>
          <h1 className='text-3xl'>{number * Math.ceil(Math.random()*5)}</h1>
          <span className='mt-6 pr-20 lg:text-[15px] md:text-[10px] sm:text-[9px]'>Average users visited per day</span>
        </div>
      </div>
      <div className='w-full mt-6 px-6 mx-5 '>

        <div className='flex gap-5  '>
          <div className="w-3/6 h-full">
            <h1>Line Chart Example</h1>
            <Linechart />
          </div>
          <b className='h-2 bg-gray-800'></b>
          <div className='w-3/6'>
            <StackedBarChart />
          </div>
        </div>
        <div className='mt-6 flex px-6'>

          <div className="w-3/6">
            <h1 className='ml-10'>Bubble chart example</h1>
            <BubbleChart />
          </div>
          <div className='w-3/6'>
            <h1 className='ml-10'>Donut chart example</h1>
            <DonutChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default dashboard
