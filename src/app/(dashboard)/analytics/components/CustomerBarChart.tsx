'use client'
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Week 01",
    Beverages: 100,
    Food: 120,
    date: "Feb 1, 2024",
  },
  {
    name: "Week 02",
    Beverages: 45,
    Food: 60,
    date: "Feb 8, 2024",
  },
  {
    name: "Week 03",
    Beverages: 95,
    Food: 75,
    date: "Feb 15, 2024",
  },
  {
    name: "Week 04",
    Beverages: 115,
    Food: 85,
    date: "Feb 22, 2024",
  },
  {
    name: "Week 05",
    Beverages: 40,
    Food: 25,
    date: "Feb 29, 2024",
  },
  {
    name: "Week 06",
    Beverages: 0,
    Food: 95,
    date: "Mar 6, 2024",
  },
];

const COLORS = {
  Beverages: "url(#beverageGradient)",
  Food: "url(#foodGradient)",
};
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-xl shadow-md border text-sm">
        <p className="font-semibold text-black">{payload[0].value} Beverages</p>
        <p className="text-gray-500">{item.date}</p>
      </div>
    );
  }
  return null;
};

const SalesSummaryCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full max-w-4xl mx-auto flex justify-between items-center">
      <div className="w-full">
        <h2 className="text-xl font-semibold">Customer Map</h2>
        <p className="text-sm text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
        <ResponsiveContainer width="100%" className={'text-sm mt-8'} height={300}>
          <BarChart data={data}>
            <defs>
              <linearGradient id="beverageGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF5F6D" />
                <stop offset="100%" stopColor="#FFC371" />
              </linearGradient>
              <linearGradient id="foodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#A5B4FC" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="Food" fill={COLORS.Food} barSize={30} radius={[8, 8, 0, 0]} />
            <Bar dataKey="Beverages" fill={COLORS.Beverages} barSize={30} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default SalesSummaryCard;
