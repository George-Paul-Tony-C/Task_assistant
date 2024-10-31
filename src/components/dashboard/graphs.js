'use client'

import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';

export const ActivityChart = () => {
    const [data, setData] = useState({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Tasks Per day',
          data: [1, 4, 2, 3, 1, 0, 3],
          backgroundColor: 'rgba(55, 50, 155, 1)',
          borderColor: 'rgba(55, 50, 155, 1)',
          borderWidth: 2,
        },
        {
          label: 'Productivity Hours',
          data: [2, 3, 3, 4, 2, 1, 5],
          backgroundColor: 'rgba(15, 155, 155, 1)',
          borderColor: 'rgba(15, 155, 155, 1)',
          borderWidth: 2,
        }
      ],
    });
  
    return (
      <div className='h-[14rem] w-full flex justify-center items-center'>
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: 'Daily Activity (past 7 days)',
            },
            scales: {
              y:
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Activity Units',
                },
                ticks: {
                  beginAtZero: true,
                },
              },
              x:
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Day of Week',
                },
              },
            },
          }}
        />
      </div>
    );
  };