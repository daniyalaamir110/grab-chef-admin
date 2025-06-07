import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, MoveDown } from "lucide-react";

const CustomersList = () => {
  const customers = [
    { name: "Benny Chagur", type: "MEMBER", avatar: "BC" },
    { name: "Chynita Bella", type: "MEMBER", avatar: "CB" },
    { name: "David Heree", type: "Regular Customer", avatar: "DH" },
    { name: "Evan D. Mas", type: "MEMBER", avatar: "EM" },
    { name: "Supratman", type: "Regular Customer", avatar: "S" },
    { name: "John Kusnaldi", type: "Regular Customer", avatar: "JK" }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-medium">Customers</CardTitle>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor</p>
        </div>
        <Button size="icon" className="bg-red-500 hover:bg-red-600 rounded-full">
          <span className="text-white text-2xl">+</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {customers.map((customer) => (
          <div key={customer.name} className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gray-100">
                {customer.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-lg">{customer.name}</div>
              <p className="text-base text-red-400">
                {customer.type}
              </p>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="mx-auto h-4 w-4 shadow-black shadow-2xl rounded-full">
        <ChevronDown />
      </div>
    </Card>
  );
};

export default CustomersList;
