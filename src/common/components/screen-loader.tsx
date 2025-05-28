import Image from 'next/image';
import logo from '../../../public/assets/images/letzfair-logo.svg';

const ScreenLoader = () => {
  return (
    <div className='fixed w-full h-full bg-white inset-0 flex justify-center items-center'>
      <Image
        src={logo}
        alt='letzfair-logo'
      />
    </div>
  );
};

export default ScreenLoader;
