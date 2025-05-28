'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { SectionHeader } from './section-header';

interface IAttendeesList {
  id: number;
  name: string;
  image: string;
  email: string;
  phone: string;
}

interface AttendeesSectionProps {
  tableHeader: string[];
  tableData: IAttendeesList[];
}

export function AttendeesSection({
  tableHeader,
  tableData,
}: AttendeesSectionProps) {
  return (
    <div>
      <SectionHeader
        title='Attendees'
        link='/attendees'
      />
      <Table>
        <TableHeader className='rounded-l-[16px]'>
          <TableRow className='bg-[#F4F5F8] h-[62px]'>
            {tableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className='bg-[#E9EDEE] rounded-[20px]'>
          {tableData.map(data => (
            <TableRow key={data.id}>
              <TableCell className='flex items-center gap-2'>
                <Image
                  src={data.image}
                  alt='attendee'
                  width={38}
                  height={38}
                  className='rounded-full h-[38px] w-[38px] object-contain'
                />
                {data.name}
              </TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
