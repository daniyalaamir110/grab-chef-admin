
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const DeliveryMap = () => {
  return (
    <div className="relative h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
      {/* Map Background Pattern */}

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7388.6857148531535!2d-84.0191790507414!3d36.01350896614285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c3bf605e158f9%3A0x435a8c8f75cb60ee!2sJubilee%20Center!5e0!3m2!1sen!2s!4v1748460920335!5m2!1sen!2s" width="600" height="450" className='w-full h-full border-none' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default DeliveryMap;
