import { ChefBanner } from "./components/ChefBanner";
import { ChefLevel } from "./components/ChefLevel";
import { CustomerTable } from "./components/CustomerTable";
import { MedalsAchievement } from "./components/MedalAcheivement";
import { RevenueChart } from "./components/RevenueChart";


const ChefDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Chef</h1>
          <div className="text-lg text-gray-500">Chef / Chef</div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ChefBanner />
          <RevenueChart />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MedalsAchievement />
          <ChefLevel />
        </div>

        {/* Bottom Row */}
        <CustomerTable />
      </div>
    </div>
  );
};

export default ChefDetails;