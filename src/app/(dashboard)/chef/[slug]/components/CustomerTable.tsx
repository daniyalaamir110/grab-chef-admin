'use client'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const customers = [
  {
    id: "#C-00463",
    joinDate: "26 March 2020, 17:42 AM",
    chefName: "Roberta Casas",
    location: "Sea Manor Road London",
    status: "Enable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s"
  },
  {
    id: "#C-00456",
    joinDate: "26 March 2020, 01:42 PM",
    chefName: "David Horison",
    location: "981 St. John's Road London",
    status: "Enable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s"
  },
  {
    id: "#C-00458",
    joinDate: "26 March 2020, 12:42 AM",
    chefName: "Rendy Greenlee",
    location: "32 The Green London",
    status: "Enable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s",
    isSelected: true
  },
  {
    id: "#C-00460",
    joinDate: "26 March 2020, 12:42 AM",
    chefName: "Veronica",
    location: "21 King Street London",
    status: "Disable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s"
  },
  {
    id: "#C-00464",
    joinDate: "26 March 2020, 17:42 AM",
    chefName: "Franky Shatang",
    location: "6 The Avenue London",
    status: "Enable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s"
  },
  {
    id: "#C-00460",
    joinDate: "26 March 2020, 12:42 AM",
    chefName: "Veronica",
    location: "21 King Street London",
    status: "Disable",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s"
  }
];

export const CustomerTable = () => {
  return (
    <Card className="bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 font-medium text-gray-900">Customer ID</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Join Date</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Chef Name</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Location</th>
              <th className="text-center py-4 px-6 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr 
                key={`${customer.id}-${index}`} 
                className={`border-b border-gray-100 hover:bg-gray-50 ${
                  customer.isSelected ? ' shadow-red-400 shadow-sm border-l-4 border-l-red-500' : ''
                }`}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <img 
                      src={customer.avatar} 
                      alt={customer.chefName}
                      className="w-8 h-8 rounded-full mr-3 object-cover"
                    />
                    <span className="text-sm text-gray-600">{customer.id}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{customer.joinDate}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 mr-1">✏️</span>
                    <span className="text-sm text-gray-900">{customer.chefName}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{customer.location}</td>
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      size="sm"
                      variant={customer.status === "Enable" ? "default" : "outline"}
                      className={
                        customer.status === "Enable"
                          ? "bg-green-500 hover:bg-green-600 text-white px-4 py-1 text-xs rounded-2xl"
                          : "text-green-600 border-green-300 px-4 py-1 text-xs rounded-2xl"
                      }
                    >
                      Enable
                    </Button>
                    <Button
                      size="sm"
                      variant={customer.status === "Disable" ? "destructive" : "outline"}
                      className={
                        customer.status === "Disable"
                          ? "bg-red-500 hover:bg-red-600 text-white px-4 py-1 text-xs rounded-2xl"
                          : "text-red-600 border-red-300 px-4 py-1 text-xs rounded-2xl"
                      }
                    >
                      Disable
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-center py-4">
        <button className="flex items-center text-gray-400 hover:text-gray-600">
          <ChevronDown className="w-8 h-8 text-red-400 shadow rounded-full" />
        </button>
      </div>
    </Card>
  );
};
