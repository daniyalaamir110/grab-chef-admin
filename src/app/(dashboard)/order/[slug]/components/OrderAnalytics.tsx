'use client'
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'René Redzepi (25%) ', value: 25 },
  { name: 'René Redzepi (25%) ', value: 60 },
  { name: 'René Redzepi (25%) ', value: 7 },
];

const COLORS = ['#4AD556', '#FFC71F', '#FF0000'];

const StyledPieChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">User Groups Distribution</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              // cx={120}
              // cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-gray-600">
        {data.map((entry, index) => (
          <li key={index} className="">
            <div className='flex justify-between items-center'>
              <p>
                {entry.name}
              </p>
              <p>{entry.value}</p>

            </div>
            <input
              type="range"
              min="0"
              max="100"
              className={`w-full ${`accent-[${COLORS[index]}]`} custom-range`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StyledPieChart;
