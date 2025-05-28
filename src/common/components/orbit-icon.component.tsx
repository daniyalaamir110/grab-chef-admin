import Image, { StaticImageData } from 'next/image';

interface OrbitIconProps {
  icon: StaticImageData;
  angle: string;
  position?: string;
}

const OrbitIcon: React.FC<OrbitIconProps> = ({ icon, angle, position }) => {
  return (
    <div
      className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
      style={{
        // transform: `rotate(${angle}) translateX(90px) rotate(-${angle})`,
        transform: `rotate(${angle}) translateX(${
          position || 90
        }px) rotate(-${angle})`,
      }}
    >
      <div className='w-8 h-8 flex items-center justify-center'>
        <Image
          src={icon}
          alt='icon'
          className='w-8 h-8'
        />
      </div>
    </div>
  );
};

export default OrbitIcon;
