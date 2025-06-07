import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TopRatedChefs = () => {
  const topChefs = [
    { id: 1, name: "Gordon Ramsay", rating: 5.0, orders: "89k", avatar: "GR" },
    { id: 2, name: "Gordon Ramsay", rating: 5.0, orders: "89k", avatar: "GR" },
    { id: 3, name: "Alain Ducasse", rating: 5.0, orders: "89k", avatar: "AD" },
    { id: 4, name: "Massimo Bottura", rating: 5.0, orders: "89k", avatar: "MB" },
    { id: 5, name: "Heston Blumenthal", rating: 5.0, orders: "89k", avatar: "HB" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Top Rated Chefs.</CardTitle>
        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {topChefs.map((chef, index) => (
          <div key={chef.id} className="flex justify-between items-center gap-3">
            <span className="text-base text-muted-foreground w-6">#{index + 1}</span>
            
            <div className="flex-1">
              <div className="font-medium text-lg">{chef.name}</div>
              <p className="text-sm font-bold text-muted-foreground">
                $56
              </p>
              <p className="text-sm text-muted-foreground">
                Order {chef.orders}
              </p>
            </div>
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-orange-100 text-orange-600">
                {chef.avatar}
              </AvatarFallback>
            </Avatar>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopRatedChefs;
