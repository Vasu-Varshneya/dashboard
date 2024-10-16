import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js';
import { API_URL } from '../Helper';

const BubbleChart = ({ updateChart, dataPoints }) => {
    const canvasRef = useRef(null); // Ref for canvas element
    const chartRef = useRef(null);  // Ref to store the chart instance

    // Initialize or update the chart when dataPoints changes
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d'); // Get canvas context

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy the chart instance
        }

        // Create a new chart instance
        chartRef.current = new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Bubble dataset',
                    data: dataPoints.map(point => ({ x: point.x, y: point.y, r: point.r })), // Bubble data
                    backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bubble color
                }],
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'X Axis',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Y Axis',
                        },
                    },
                },
            },
        });

        // Clean up the chart instance when the component unmounts or before creating a new chart
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, [dataPoints]); // Re-render the chart whenever dataPoints change

    return <canvas ref={canvasRef} width="50" height="50"></canvas>; // Render the canvas
};

export default BubbleChart;





