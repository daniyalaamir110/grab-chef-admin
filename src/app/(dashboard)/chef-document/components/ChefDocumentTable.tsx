'use client';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ChefDocumentCard from './ChefDocumentCard';
import { useCallback, useEffect, useState } from 'react';
import ChefProfileCard from './ChefProfileCard';
import { getCookie } from 'cookies-next/client';
import axios from 'axios';
import { BASE_API_URL } from '@/common/constants';
import { toast } from 'sonner';

interface ChefDocument {
  id: string;
  avatar: string;
  document: string;
  joinDate: string;
  chefName: string;
  location: string;
}

const ChefDocumentTable = () => {
  const [selectedChef, setSelectedChef] = useState<ChefDocument | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getChefs = useCallback(async () => {
    try {
      setLoading(true);
      const token = getCookie('token');
      const response = await axios.get(`${BASE_API_URL}/admin/get-chefs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    
      setData(response?.data?.chef);
    } catch (error: any) {
      toast(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getChefs();
  }, []);

  const handleViewDetails = (documentId: string) => {
    const chef = data.find(doc => doc?._id === documentId);
    if (chef) {
      setSelectedChef(chef);
      setIsProfileOpen(true);
    }
  };

  const handleDelete = (documentId: string) => {
    console.log('Delete document:', documentId);
  };

  return (
    <div className='w-full bg-white rounded-lg shadow-sm border border-gray-200'>
      {/* Header */}

      {/* Scrollable Table Container */}
      <div className='w-full overflow-x-auto'>
        <div className='min-w-[1050px]'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[120px]'></TableHead>
                <TableHead className='w-[120px]'>Chef ID</TableHead>
                <TableHead className='w-[250px]'>Chef Document</TableHead>
                <TableHead className='w-[200px]'>Join Date</TableHead>
                <TableHead className='w-[150px]'>Chef Name</TableHead>
                <TableHead className='w-[200px]'>Location</TableHead>
                <TableHead className='w-[150px] text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((doc, index) => (
                <ChefDocumentCard
                  key={`${doc._id}-${index}`}
                  id={doc._id}
                  avatar={doc?.profilePicture || ''}
                  document={doc?.certificates}
                  joinDate={doc?.createdAt}
                  chefName={`${doc.firstName} ${doc.lastName}`}
                  location={
                    Array.isArray(doc.chef?.locations) &&
                    doc.chef?.locations.length
                      ? doc.chef?.locations[0].name
                      : "N'A"
                  }
                  onViewDetails={() => handleViewDetails(doc._id)}
                  onDelete={() => handleDelete(`${doc.id}`)}
                />
              ))}
            </TableBody>
          </Table>
        </div>

        {selectedChef && (
          <ChefProfileCard
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            chef={selectedChef}
          />
        )}
      </div>
    </div>
  );
};

export default ChefDocumentTable;
