import { Card } from "@/components/ui/card";

export const ChefBanner = () => {
  return (
    <Card className="relative min-h-64  bg-[url('/assets/images/chefbg.png')] flex justify-center xl:justify-start items-center xl:items-start text-white p-8 border-0">
      
      <div className=" relative z-10 flex xl:text-left text-center items-center justify-between h-full">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-2">Ms Naba</h2>
          <p className="text-lg opacity-90 max-w-xs">
            Find food according to your wishes with the best quality.
          </p>
        </div>
        
      </div>
        <div className="flex-shrink-0 static xl:absolute -right-10 bottom-0">
          <div className=" flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/images/chefImg.png" 
              alt="Chef Ms Naba" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </Card>
  );
};
