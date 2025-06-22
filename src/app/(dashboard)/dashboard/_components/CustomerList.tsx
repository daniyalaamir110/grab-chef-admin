import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, MoveDown } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getData } from "@/api/api";
import { urls } from "@/api/urls";

const CustomersList = () => {
  const [customers, setCustomers] = useState([])
  const [customersShow, setCustomersShow] = useState(5)


  const getCustomers = async () => {
    try {
      const data = await getData(urls.dashboard.getCustomers)
      console.log(data,'---cutomer data')
      setCustomers(data?.customers)
    } catch (error:any) {
      console.log(error?.message)
      toast(error?.message)
    }
  }



  useEffect(() => {
    getCustomers()
  },[])

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
        {customers?.length > 0 && customers?.slice(0, customersShow).map((customer:any) => (
          <div key={customer?._id} className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gray-100">
                {customer.firstName?.substring(0,1)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-lg">{customer.firstName} {customer?.lastName || ''}</div>
              {/* <p className="text-base text-red-400">
                {customer.type}
              </p> */}
            </div>
          </div>
        ))}
      </CardContent>

      <div onClick={() => setCustomersShow(prev => prev+5)} className="mx-auto h-4 w-4 shadow-black shadow-2xl rounded-full">
        <ChevronDown />
      </div>
    </Card>
  );
};

export default CustomersList;
