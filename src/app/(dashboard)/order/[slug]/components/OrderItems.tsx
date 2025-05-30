'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { XCircle } from 'lucide-react';
import Image from 'next/image';

const orderItems = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98TRYywjM93kWoqMRo0elB2wZpDsQxJTHkw&s',
    title: 'Chicken curry special with cucumber',
    category: 'MAIN COURSE',
    rating: 4,
    reviews: 454,
    qty: 3,
    advance: 14.99,
    total: 44.97,
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98TRYywjM93kWoqMRo0elB2wZpDsQxJTHkw&s',
    title: 'Italiano pizza with garlic',
    category: 'MAIN COURSE',
    rating: 4,
    reviews: 454,
    qty: 1,
    advance: 15.44,
    total: 15.44,
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98TRYywjM93kWoqMRo0elB2wZpDsQxJTHkw&s',
    title: 'Watermelon juice with ice',
    category: 'MAIN COURSE',
    rating: 4,
    reviews: 454,
    qty: 1,
    advance: 4.12,
    total: 4.12,
  },
];

export default function OrderItemTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Items</h2>
      <Table className='min-w-[800px]'>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Items</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-center">Advance Payment</TableHead>
            <TableHead className="text-center">Total Price</TableHead>
            <TableHead className="text-center w-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderItems.map(item => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex text-wrap gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <div className="text-[12px] uppercase text-red-600 font-semibold">
                      {item.category}
                    </div>
                    <div className="font-semibold text-base text-wrap">{item.title}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span>({item.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">{item.qty}x</TableCell>
              <TableCell className="text-center">${item.advance.toFixed(2)}</TableCell>
              <TableCell className="text-center font-semibold">${item.total.toFixed(2)}</TableCell>
              <TableCell className="text-center">
                <button>
                  <XCircle className="text-red-500 hover:text-red-600 w-5 h-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
