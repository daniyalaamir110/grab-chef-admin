import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Customer {
    id: number;
    name: string;
    orderCount: number;
    avatar: string;
    initials: string;
}

const customers: Customer[] = [
    {
        id: 1,
        name: "Claudya Chintia",
        orderCount: 651,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s",
        initials: "CC"
    },
    {
        id: 2,
        name: "Jean Reves",
        orderCount: 356,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s",
        initials: "JR"
    },
    {
        id: 3,
        name: "Kevin Hard",
        orderCount: 125,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s",
        initials: "KH"
    },
    {
        id: 4,
        name: "Dave Jev Bosh",
        orderCount: 78,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKNpeICypw6HglgXH9dwb2Uj4rG0eH9DXcQ&s",
        initials: "DB"
    }
];

const LoyalCustomers = () => {
    return (
        <div>
            <div className=" mt-4">
                <div >
                    <div className="flex justify-center">
                        <Card className="w-full mx-auto px-6 py-4 bg-white shadow-lg">
                            <div className="mb-2">
                                <h2 className="text-xl font-semibold text-gray-900 mb-1">Loyal Customers</h2>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor</p>
                            </div>

                            <div className="space-y-4">
                                {customers.map((customer) => (
                                    <div
                                        key={customer.id}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={customer.avatar} alt={customer.name} />
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
                                                    {customer.initials}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{customer.name}</h3>
                                                <p className="text-sm text-red-500 font-medium">
                                                    {customer.orderCount} Times Order
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoyalCustomers;