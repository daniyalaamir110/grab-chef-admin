'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import React from "react";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

const chartData = [
    { name: "Safe", value: 20, fill: "#FACC15" },
    { name: "Mid", value: 50, fill: "#FDBA74" },
    { name: "Menu Sold", value: 80, fill: "#EF4444" }
];

const SalesSummary: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow w-full max-w-4xl mx-auto ">
            <div className="w-full mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Sales Summary</h2>
                        <p className="text-sm text-gray-400 ">Lorem ipsum dolor sit amet, consectetur</p>

                    </div>
                    <Select defaultValue="apple">
                        <SelectTrigger className="rounded-2xl">
                            <p>Select Type</p>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="orange">Orange</SelectItem>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="grape" disabled>
                                    Grape
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
            </div>

            <div className="w-full pl-4 flex  gap-6">
                <div className="w-2/5">
                    <ResponsiveContainer width="100%" height={150}>
                    <RadialBarChart
                        innerRadius="50%"
                        outerRadius="250%"
                        data={chartData}
                        startAngle={180}
                        endAngle={-180}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        {chartData.map((entry, index) => (
                            <RadialBar
                                key={index}
                                dataKey="value"
                                background
                                cornerRadius={40}
                                data={[entry]}
                            />
                        ))}
                    </RadialBarChart>
                </ResponsiveContainer>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-8 rounded-full bg-red-500" />
                        <div>
                            <div className="text-lg font-bold text-black">63,876</div>
                            <div className="text-xs text-gray-500">Menu Sold</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-2 h-8 rounded-full bg-yellow-400" />
                        <div>
                            <div className="text-lg font-bold text-black">$97,125</div>
                            <div className="text-xs text-gray-500">Safe (20%)</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-2 h-8 rounded-full bg-yellow-300" />
                        <div>
                            <div className="text-lg font-bold text-black">$872,335</div>
                            <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-2 h-8 rounded-full bg-gray-400" />
                        <div>
                            <div className="text-lg font-bold text-black">$872,335</div>
                            <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesSummary;
