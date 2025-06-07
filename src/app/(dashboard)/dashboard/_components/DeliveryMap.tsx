import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ellipsis, MoreHorizontal } from 'lucide-react';

const DeliveryMaps = () => {
  return (
      <div>
        <div className="relative h-48  rounded-lg mb-4 overflow-hidden">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">Delivery Maps</p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div>
                    <Ellipsis />
                </div>
            </div>
          {/* Simple network visualization */}
          <div className="mt-6 flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.1765467390373!2d-84.013437824504!3d36.01598197248099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c3bf605e158f9%3A0x435a8c8f75cb60ee!2sJubilee%20Center!5e0!3m2!1sen!2s!4v1749327409475!5m2!1sen!2s" width="600" height="450" style={{border:'none'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">45 Orders</div>
          <div className="text-sm text-muted-foreground">10:00 AM</div>
        </div>
      </div>
  );
};

export default DeliveryMaps;
