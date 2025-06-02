'use client'
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

type StatCardProps = {
  title: string;
  value: string | number;
  percentage: number; // e.g., 75
};

const COLORS = ["#FF5F6D", "#FFC371"]; // Gradient-like simulation

export const StatCard: React.FC<StatCardProps> = ({ title, value, percentage }) => {
  const data = [
    { name: "progress", value: percentage },
    { name: "rest", value: 100 - percentage },
  ];

  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl shadow-md w-full">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <PieChart width={60} height={60}>
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                <stop offset="20%" stopColor="#FFC41F" stopOpacity={0.5} />
                <stop offset="70%" stopColor="#FF0000" stopOpacity={0.8} />
            </linearGradient>
            </defs>
        <Pie
          data={data}
          innerRadius={20}
          outerRadius={30}
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill="url(#colorUv)"
            //   fill={index === 0 ? COLORS[percentage < 50 ? 0 : 1] : "#fceeee"}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

const SummaryCards = () => {
  return (
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 flex-wrap">
      <StatCard title="Menus Today" value={346} percentage={75} />
      <StatCard title="Customer Today" value={221} percentage={60} />
      <StatCard title="Total Revenue" value="$951.52" percentage={80} />
      <StatCard title="Employee" value={98} percentage={90} />
    </div>
  )
}

export default SummaryCards
