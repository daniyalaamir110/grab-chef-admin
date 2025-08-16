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

export default function OrderItemTable({ data }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Items</h2>
      <Table className='min-w-[800px]'>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Items</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            {/* <TableHead className="text-center">Advance Payment</TableHead> */}
            <TableHead className="text-center">Total Price</TableHead>
            <TableHead className="text-center w-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.menuItems?.length > 0 && data?.menuItems?.map((item: any, index: number) => item?.menuItemId ? (
            <TableRow key={index}>
              <TableCell>
                <div className="flex text-wrap gap-4 items-center">
                  <img
                    src={item?.menuItemId.images[0]}
                    alt={item?.menuItemId.title}
                    width={60}
                    height={60}
                    className="rounded-md w-16 h-16 object-cover"
                  />
                  <div>
                    <div className="text-[12px] uppercase text-red-600 font-semibold">
                      {item.category}
                    </div>
                    <div className="font-semibold text-base text-wrap">{item?.menuItemId.title}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      {/* <span className="text-yellow-500">★★★★☆</span> */}
                      {/* <span>({item.reviews} reviews)</span> */}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">{item.quantity}x</TableCell>
              {/* <TableCell className="text-center">${item.advance.toFixed(2)}</TableCell> */}
              <TableCell className="text-center font-semibold">${item?.menuItemId?.price}</TableCell>
              <TableCell className="text-center">
                <button>
                  <XCircle className="text-red-500 hover:text-red-600 w-5 h-5" />
                </button>
              </TableCell>
            </TableRow>

          ) : null)}
        </TableBody>
      </Table>
    </div>
  );
}
