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

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const orders = [
    {
      id: "#552211",
      date: "26 March 2020, 12:42 AM",
      customer: "Olivia Shine",
      location: "35 Station Road London",
      amount: "$82.46",
      status: "Delivered"
    },
    {
      id: "#552351",
      date: "26 March 2020, 12:42 AM",
      customer: "James Witcwicky",
      location: "Corner Street 5th London",
      amount: "$164.52",
      status: "Pending"
    },
    {
      id: "#552323",
      date: "26 March 2020, 12:42 AM",
      customer: "Veronica",
      location: "21 King Street London",
      amount: "$74.92",
      status: "Pending"
    },
    {
      id: "#552375",
      date: "26 March 2020, 12:12 AM",
      customer: "Emilia Johanson",
      location: "67 St. John's Road London",
      amount: "$251.16",
      status: "PENDING"
    },
    {
      id: "#552368",
      date: "26 March 2020, 12:42 AM",
      customer: "Jessica Wong",
      location: "11 Church Road London",
      amount: "$24.17",
      status: "CANCELLED"
    },
    {
      id: "#552349",
      date: "26 March 2020, 12:42 AM",
      customer: "Roberto Carlo",
      location: "544 Manor Road London",
      amount: "$34.41",
      status: "Cancelled"
    },
    {
      id: "#552354",
      date: "26 March 2020, 01:42 PM",
      customer: "David Horison",
      location: "981 St. John's Road London",
      amount: "$24.55",
      status: "Pending"
    },
    {
      id: "#552397",
      date: "26 March 2020, 12:42 AM",
      customer: "Franky Sintoang",
      location: "6 The Avenue London",
      amount: "$45.86",
      status: "Pending"
    },
    {
      id: "#552356",
      date: "26 March 2020, 12:42 AM",
      customer: "Randy Greenlee",
      location: "32 The Green London",
      amount: "$44.99",
      status: "Delivered"
    },
    {
      id: "#552322",
      date: "26 March 2020, 12:42 AM",
      customer: "Samantha Balko",
      location: "79 The Drive London",
      amount: "$22.18",
      status: "Delivered"
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
        <h1 className="text-2xl font-semibold text-gray-900">Order Page List</h1>
        <p>Order/Order Details</p>
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
                <TableHead className="font-semibold text-gray-900">Order ID ⇅</TableHead>
                <TableHead className="font-semibold text-gray-900">Date ⇅</TableHead>
                <TableHead className="font-semibold text-gray-900">Customer Name ⇅</TableHead>
                <TableHead className="font-semibold text-gray-900">Location ⇅</TableHead>
                <TableHead className="font-semibold text-gray-900">Amount ⇅</TableHead>
                <TableHead className="font-semibold text-gray-900">Status Order ⇅</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={order.id} className={selected.includes(order.id) ? " shadow-md shadow-red-300 border-l-4 border-l-red-500" : ""}>
                  <TableCell className="font-medium text-blue-600"><Checkbox onCheckedChange={() => handleSelect(order.id)} /></TableCell>
                  <TableCell className="font-medium text-blue-600">
                    <Link href={`/order/${order.id?.replace('#','')}`}>{order.id}</Link>
                  </TableCell>
                  <TableCell className="text-gray-600">{order.date}</TableCell>
                  <TableCell className="text-gray-900">{order.customer}</TableCell>
                  <TableCell className="text-gray-600">{order.location}</TableCell>
                  <TableCell className="font-medium">{order.amount}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
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

export default Orders;
