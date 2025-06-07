import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, MapPin, Plane } from 'lucide-react';
import DeliveryMaps from "./DeliveryMap";

const UpcomingShipping = () => {
    const upcomingDeliveries = [
        {
            name: "John Kusnaldi",
            items: "6 Items",
            time: "11:24 AM",
            address: "Franklin Avenue St, London, ABC 123456, United Kingdom",
            avatar: "JK"
        },
        {
            name: "Margaretha",
            items: "2 Items",
            time: "11:24 AM",
            address: "Groove Street Families, OFF 243256, United Kingdom",
            avatar: "M"
        },
        {
            name: "Richard Lee",
            items: "4 Items",
            time: "11:24 AM",
            address: "Bossman St, 2944 ABC, United Kingdom",
            avatar: "RL"
        }
    ];

    return (
        <Card>

            <CardContent className="space-y-4">
                <DeliveryMaps />
                {upcomingDeliveries.map((delivery) => (
                    <div key={delivery.name} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0">
                        <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-gray-100">
                                {delivery.avatar}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex justify-between items-center min-w-0">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-sm">{delivery.name}</span>
                                    <span className="text-xs text-red-500">({delivery.items})</span>
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">
                                    Will be shipping on {delivery.time}
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <span className="text-xs text-muted-foreground leading-relaxed">
                                    {delivery.address}
                                </span>
                                <div className="bg-yellow-400 p-2 rounded-full">
                                    <MapPin className="h-8 w-8 text-orange-500 mt-0.5 flex-shrink-0" />

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mx-auto h-4 w-4 shadow-black shadow-2xl rounded-full">
                    <ChevronDown />
                </div>
            </CardContent>
        </Card>
    );
};

export default UpcomingShipping;
