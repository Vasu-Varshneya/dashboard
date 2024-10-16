import BubbleChart from '../custom/Bubble';

import React, { useState } from 'react';
import { API_URL } from '../Helper';

const MyDashboard = () => {
  const [updateChart, setUpdateChart] = useState(false);
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [r, setR] = useState('');
  const [dataPoints, setDataPoints] = useState([]); // Keep track of the current data

  const handleDataSubmitted = () => {
    setUpdateChart((prev) => !prev); // Toggle to re-fetch and re-render chart
  };

  const onDataSubmitted = () => {
    console.log("Data submitted successfully!");
    handleDataSubmitted(); // Trigger chart update
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('x:', x, 'y:', y, 'r:', r); // Debug log for values being submitted

    const response = await fetch(API_URL + '/bubblechart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: Number(x), y: Number(y), r: Number(r) }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Response after submission:", responseData); // Log response after submission

      // Replace the current dataset with the new data
      setDataPoints([{ x: Number(x), y: Number(y), r: Number(r) }]); // Set new data

      // Clear the form
      setX('');
      setY('');
      setR('');
    } else {
      console.error('Failed to submit data');
    }
  };

  const name = localStorage.getItem('name') || 'User';

  return (
    <>
      <div>
        <h1 className='text-3xl text-blue-500'>{name}'s Dashboard</h1>
      </div>
      <nav>
        <ul className='flex gap-4 justify-center items-center'>
          <li className='cursor-pointer hover:underline font-bold text-indigo-500'>Bubble Chart</li>
        </ul>
      </nav>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="X value" value={x} onChange={(e) => setX(e.target.value)} required />
          <input type="number" placeholder="Y value" value={y} onChange={(e) => setY(e.target.value)} required />
          <input type="number" placeholder="Radius (r)" value={r} onChange={(e) => setR(e.target.value)} required />
          <button type="submit">Submit</button>
        </form>
        <BubbleChart updateChart={updateChart} dataPoints={dataPoints} />
      </div>
    </>
  );
};

export default MyDashboard;


