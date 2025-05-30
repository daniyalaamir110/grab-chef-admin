'use client'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ChefDocumentCard from './ChefDocumentCard';
import { useState } from 'react';
import ChefProfileCard from './ChefProfileCard';

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

  const documents: ChefDocument[] = [
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/c8d472db-732b-4c96-9ce2-63db87a64640.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    },
    {
      id: "#C-004560",
      avatar: "/lovable-uploads/57d8cb1b-8a4b-4d5f-9ec9-be3db6582270.png",
      document: "New Document",
      joinDate: "26 March 2020, 12:42 AM",
      chefName: "Veronica",
      location: "21 King Street London"
    }
  ];

  const handleViewDetails = (documentId: string) => {
    const chef = documents.find(doc => `${doc.id}-${documents.indexOf(doc)}` === documentId);
    if (chef) {
      setSelectedChef(chef);
      setIsProfileOpen(true);
    }
  };

  const handleDelete = (documentId: string) => {
    console.log('Delete document:', documentId);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      
      {/* Scrollable Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1050px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]"></TableHead>
                <TableHead className="w-[120px]">Chef ID</TableHead>
                <TableHead className="w-[250px]">Chef Document</TableHead>
                <TableHead className="w-[200px]">Join Date</TableHead>
                <TableHead className="w-[150px]">Chef Name</TableHead>
                <TableHead className="w-[200px]">Location</TableHead>
                <TableHead className="w-[150px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc, index) => (
                <ChefDocumentCard
                  key={`${doc.id}-${index}`}
                  id={doc.id}
                  avatar={doc.avatar}
                  document={doc.document}
                  joinDate={doc.joinDate}
                  chefName={doc.chefName}
                  location={doc.location}
                  onViewDetails={() => handleViewDetails(`${doc.id}-${index}`)}
                  onDelete={() => handleDelete(`${doc.id}-${index}`)}
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