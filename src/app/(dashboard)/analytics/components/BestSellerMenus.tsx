import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  likes: number;
  rating: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Spinach with Roasted Crab",
    price: 6.73,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    likes: 254,
    rating: 6.723
  },
  {
    id: 2,
    name: "Chicken Teriyaki Khas Haji Muhidin Malang",
    price: 6.73,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    likes: 254,
    rating: 6.723
  },
  {
    id: 3,
    name: "Fried Chicken Roll Extra Spicy with Mozarella",
    price: 6.73,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqfyojxMBijikrAeZvgsCyIDMD-rCktUBPw&s",
    likes: 254,
    rating: 6.723
  }
];

const BestSellerMenus = () => {
  return (
    <Card className="w-full p-4 bg-white shadow-lg">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Seler Menus</h2>
        <p className="text-sm text-gray-500">Lorem ipsum dolor</p>
      </div>
      
      <div className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-24 rounded-lg object-cover"
            />
            <div className="flex-1 mt-3">
              <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1">
                {item.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                    <span className="text-gray-600">{item.likes}k</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-orange-500">⭐</span>
                    <span className="text-gray-600">{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          ⌄
        </button>
      </div>
    </Card>
  );
};

export default BestSellerMenus;