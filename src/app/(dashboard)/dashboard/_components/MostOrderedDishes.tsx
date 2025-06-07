import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MostOrderedDishes = () => {
  const dishes = [
    { name: "pizza", orders: 432, progress: 85 },
    { name: "breakfast", orders: 97, progress: 45 },
    { name: "coffee", orders: 61, progress: 30 }
  ];
  const tags = ['#japanessefood','#design','#projectmanagement','16+']
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Most Ordered Dishes</CardTitle>
        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {dishes.map((dish, index) => (
          <div key={dish.name} className="space-y-2">
            <Progress value={dish.progress} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">#{dish.name}</span>
              <span className="text-xs text-muted-foreground">{dish.orders} times</span>
            </div>
          </div>
        ))}
        <p className="text-lg">Other Tags</p>
        <div className="flex flex-wrap gap-3">
            {
                tags?.map((tag,i) => (
                    <p key={i} className="text-base w-fit text-red-400 border border-red-400 rounded-3xl px-3 py-2">{tag}</p>
                ))
            }
        </div>
      </CardContent>
    </Card>
  );
};

export default MostOrderedDishes