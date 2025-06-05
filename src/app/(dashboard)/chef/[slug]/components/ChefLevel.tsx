'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const levelData = [
  { name: "Ms. Naba", value: 90, level: "level 1", color: "#10b981" },
  { name: "David Horison", value: 40, level: "level 2", color: "#f59e0b" },
  { name: "Veronica", value: 25, level: "level 3", color: "#ef4444" }
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export const ChefLevel = () => {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-900">Level of Chef</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1 space-y-4">
            {levelData.map((chef, index) => (
              <div key={chef.name} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-medium text-gray-900">
                      {chef.name} ({chef.value}%)
                    </span>
                    <span className="text-lg text-gray-500">{chef.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="h-4 rounded-full transition-all duration-300"
                      style={{
                        width: `${chef.value}%`,
                        backgroundColor: chef.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-24 h-24 ml-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={levelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {levelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-2">
              <span className="text-lg font-bold text-red-500">25%</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center text-gray-400 hover:text-gray-600">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};