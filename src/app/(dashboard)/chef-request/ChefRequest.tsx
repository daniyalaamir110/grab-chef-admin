'use client'
import { useState } from "react";
import { Search, Filter, MoreHorizontal, Calendar, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const ChefRequest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<string[]>([]);

    const chefs = [
        {
            id: "#C-004563",
            date: "26 March 2020, 12:42 AM",
            name: "Roberto Carlo",
            address: "544 Manor Road London",
            isSenior: false,
            icon: "🥄",
            isAccepted: false
        },
        {
            id: "#C-00456",
            date: "26 March 2020, 01:42 PM",
            name: "David Horison",
            address: "981 St. John’s Road London",
            isSenior: false,
            icon: "🥄",
            isAccepted: true
        },
        {
            id: "#C-00458",
            date: "26 March 2020, 12:42 AM",
            name: "Rendy Greenlee",
            address: "32 The Green London",
            isSenior: true,
            icon: "👑",
            isAccepted: true
        },
        {
            id: "#C-00451",
            date: "26 March 2020, 12:42 AM",
            name: "James Wltcwicky",
            address: "Corner Street 5th London",
            isSenior: true,
            icon: "👑",
            isAccepted: false
        },
        {
            id: "#C-004562",
            date: "26 March 2020, 12:42 AM",
            name: "Olivia Shine",
            address: "35 Station Road London",
            isSenior: false,
            icon: "🥄",
            isAccepted: false
        },
        {
            id: "#C-004560",
            date: "26 March 2020, 12:42 AM",
            name: "Veronica",
            address: "21 King Street London",
            isSenior: true,
            icon: "👑",
            isAccepted: true
        },
        {
            id: "#C-004564",
            date: "26 March 2020, 12:42 AM",
            name: "Franky Sihotang",
            address: "6 The Avenue London",
            isSenior: false,
            icon: "🥄",
            isAccepted: false
        },
        {
            id: "#C-004561",
            date: "26 March 2020, 12:42 AM",
            name: "Samantha Bake",
            address: "79 The Drive London",
            isSenior: true,
            icon: "👑",
            isAccepted: true
        },
        {
            id: "#C-00459",
            date: "26 March 2020, 12:42 AM",
            name: "Jessica Wong",
            address: "11 Church Road London",
            isSenior: true,
            icon: "👑",
            isAccepted: false
        }
    ];

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>;
            case "pending":
                return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Pending</Badge>;
            case "cancelled":
                return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Cancelled</Badge>;
            default:
                return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>;
        }
    };

    const handleSelect = (id: string) => {
        let temp = [...selected]
        let index = temp.findIndex(i => i == id)
        if (index == -1) {
            temp.push(id)
        } else {
            temp.splice(index, 1)
        }
        console.log({ temp })
        setSelected(temp)
    }

    return (
        <div className="p-6 w-full">
            {/* Page Header */}
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Chef Requests</h1>
                <p>Customer/Analytics</p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-icon-hex h-4 w-4" />
                    <Input
                        placeholder="Search here"
                        className="pr-10 bg-gray-50 rounded-4xl border-gray-200"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex items-center gap-4">
                        <p className="flex items-center gap-3"><img className="w-8 h-8" src={'/assets/icons/junior.png'} /><span>Represent For Junior</span></p>
                        <p className="flex items-center gap-3"><img className="w-8 h-8" src={'/assets/icons/senior.png'} /><span>Represent For Senior</span></p>

                    </div>
                    <Button variant="outline" className="flex rounded-4xl items-center space-x-2">
                        <Calendar className="h-4 w-4 text-icon-hex" />
                        <span className="flex items-center gap-2">Filter <ArrowDown className="text-icon-hex" /></span>
                    </Button>
                    <Button className="bg-yellow-400 w-10 h-10 rounded-full hover:bg-yellow-500 text-black">
                        <span className="">⊕</span>
                    </Button>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white w-full rounded-lg border border-gray-200">
                <div className=" overflow-x-auto ">
                    <Table className="min-w-[300px]">
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-12"></TableHead>
                                <TableHead className="font-semibold text-gray-900">Chef ID ⇅</TableHead>
                                <TableHead className="font-semibold text-gray-900">Join Date ⇅</TableHead>
                                <TableHead className="font-semibold text-gray-900">Chef Name ⇅</TableHead>
                                <TableHead className="font-semibold text-gray-900">Location ⇅</TableHead>
                                <TableHead className="font-semibold text-gray-900">Accept Chef ⇅</TableHead>
                                <TableHead className="font-semibold text-gray-900">Reject Chef ⇅</TableHead>
                                <TableHead className="w-12"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {chefs.map((chef, index) => (
                                <TableRow key={chef.id} className={selected.includes(chef.id) ? " shadow-md shadow-red-300 border-l-4 border-l-red-500" : ""}>
                                    <TableCell className="font-medium text-blue-600"><Checkbox onCheckedChange={() => handleSelect(chef.id)} /></TableCell>
                                    <TableCell className="font-medium text-blue-600">
                                        <Link href={`#`}>{chef.id}</Link>
                                    </TableCell>
                                    <TableCell className="text-gray-600">{chef.date}</TableCell>
                                    <TableCell className="text-gray-900 flex items-center gap-3"><img className="w-6 h-6" src={chef.isSenior ? '/assets/icons/senior.png' : '/assets/icons/junior.png'} />{chef.name}</TableCell>
                                    <TableCell className="text-gray-600">{chef.address}</TableCell>
                                    <TableCell className="font-medium">
                                        <button className={`px-4 py-2 rounded-full font-semibold text-white ${chef.isAccepted ? 'bg-green-500' : 'bg-green-200'} hover:bg-green-600 transition`}>
                                            Accept
                                        </button>
                                    </TableCell>
                                    <TableCell><button className={`px-4 py-2 rounded-full font-semibold text-white { ${chef.isAccepted ? 'bg-red-200' : 'bg-red-500'} hover:bg-red-600 transition`}>
                                        Reject
                                    </button></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-gray-600">
                    Showing <span className="font-bold">10</span> from <span className="font-bold">46</span> data
                </p>

                <div className="flex items-center space-x-2">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem className="rounded-full">
                                <PaginationLink className="rounded-full" href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default ChefRequest;
