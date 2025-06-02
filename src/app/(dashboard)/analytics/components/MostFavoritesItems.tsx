'use client'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ChevronDown, BarChart3, TrendingUp } from "lucide-react";
import { useState } from "react";

interface FavoriteItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  likes: string;
  interest: number;
  totalSales: string;
  completion: number;
}

const categories = ["All Categories", "Main Course", "Pizza", "Drink", "Dessert", "More"];

const favoriteItems: FavoriteItem[] = [
  {
    id: 1,
    name: "Creamy Parmesan Cheese with Chicken Teriyaki Egg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    rating: 3,
    reviews: 454,
    likes: "256k",
    interest: 45,
    totalSales: "6,732",
    completion: 75
  },
  {
    id: 2,
    name: "Mini Donuts with Variant Topping [Chocolate]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    rating: 3,
    reviews: 454,
    likes: "256k",
    interest: 26,
    totalSales: "5,721",
    completion: 62
  },
  {
    id: 3,
    name: "Cappucino Latte",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    rating: 3,
    reviews: 454,
    likes: "256k",
    interest: 17,
    totalSales: "3,515",
    completion: 52
  }
];

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 20;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="#f3f4f6"
          strokeWidth="4"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="#ef4444"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
      </div>
    </div>
  );
};

const TrendChart = ({ trend }: { trend: "up" | "down" }) => {
  return (
    <div className="w-16 h-8 flex items-center justify-center">
      <svg width="40" height="20" viewBox="0 0 40 20">
        <path
          d={trend === "up" ? "M2 18 L10 12 L18 14 L26 8 L34 10 L38 6" : "M2 6 L10 12 L18 10 L26 16 L34 14 L38 18"}
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const MostFavoritesItems = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-orange-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <Card className="w-full p-6 bg-white shadow-lg">
      <div className="mb-6 flex xl:flex-row flex-col justify-between">
        <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Most Favorites Items</h2>
            <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 bg-[#FFF3F0] rounded-3xl h-fit w-fit p-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-3 py-2 text-sm ${
                activeCategory === category
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {category === "More" && <ChevronDown className="ml-1 w-4 h-4" />}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Items List */}
      <div className="space-y-6">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            
            <div className="flex xl:flex-row w-full justify-between flex-col gap-4 items-start lg:items-center flex-wrap">
                <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-base mb-2 line-clamp-2">
                    {item.name}
                </h3>
                <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center">
                    {renderStars(item.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span className="text-sm text-gray-600">{item.likes} Like it</span>
                </div>
                </div>
                
                <div className="flex items-center gap-8">
                <div className="text-center flex items-center">
                    <TrendChart trend="up" />
                    <div className="mt-2">
                    <div className="text-lg font-bold text-gray-900">{item.interest}%</div>
                    <div className="text-sm text-gray-500">Interest</div>
                    </div>
                </div>
                
                {/* Total Sales */}
                <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="w-6 h-6 text-red-500" />
                    <div className="text-lg font-bold text-gray-900">{item.totalSales}</div>
                    </div>
                    <div>
                    <div className="text-sm text-gray-500">Total Sales</div>
                    </div>
                </div>
                
                {/* Progress Circle */}
                <div className="text-center">
                    <CircularProgress percentage={item.completion} />
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Expand Button */}
      <div className="flex justify-center mt-6">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
};

export default MostFavoritesItems;