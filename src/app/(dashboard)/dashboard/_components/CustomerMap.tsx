import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const CustomerMap = () => {
  const customerData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    customers: Math.floor(Math.random() * 500) + 100
  }));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-medium">Customer Map</CardTitle>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="text-xs">Monthly</Button>
          <Button variant="default" size="sm" className="text-xs bg-red-500 hover:bg-red-600">Weekly</Button>
          <Button variant="ghost" size="sm" className="text-xs">Today</Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={customerData}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="customers" fill="#f97316" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CustomerMap;
