'use client'
import { Button } from "@/components/ui/button";
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";

// import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { SelectLabel } from "@radix-ui/react-select";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid,
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

const SalesStatisticsChart: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-between items-start mb-6">
                <div className=" flex items-center justify-between w-full">
                    <div >
                        <h2 className="text-xl font-semibold">Sales Statistic</h2>
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor</p>
                    </div>
                    <div className="flex gap-3 items-center mb-8">
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
                        <DropdownMenu >
                            <DropdownMenuTrigger className="bg-white!">
                                <Button className="bg-white text-gray-400 hover:bg-transparent">
                                    
                                    <BsThreeDotsVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem >Edit</DropdownMenuItem>
                                <DropdownMenuItem >Duplicate</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Archive</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
                <div className="flex gap-6 items-center justify-between w-full">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-orange-400" />
                            <span className=" text-gray-600 text-xs">Beverages</span>
                            <span className="text-black text-sm font-semibold">569</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-indigo-400" />
                            <span className="text-gray-600 text-xs">Food</span>
                            <span className="text-black text-sm font-semibold">1,567</span>
                        </div>

                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Number</span>
                        <Switch />
                    </div>
                </div>
            </div>

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
    );
};

export default SalesStatisticsChart;
