
  import React, { FC } from 'react';
  import { MapPin, Navigation } from 'lucide-react';

  interface IProps {
    data: any
  }
  const DeliveryMap:FC<IProps> = ({data}) => {
    let [lat,lng] = data[0]?.location?.location?.coordinates || [0,0]
    return (
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        width="100%"
        height="100%"
        className="w-full h-full border-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    );
  };

  export default DeliveryMap;
