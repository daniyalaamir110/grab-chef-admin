export const ChefDetailCard = () => {
  return (
    <div className='h-full w-full  rounded-2xl overflow-hidden shadow-lg flex items-center bg-[#FF0000] text-white'>
      <div className='flex-1 px-10 py-16 bg-gradient-to-br from-yellow-400 via-red-500 to-red-600 relative'>
        <h1 className='text-5xl font-bold mb-6'>Ms Naba</h1>
        <p className='text-xl leading-relaxed'>
          Find food according to your wishes with the best quality.
        </p>
        <div className='absolute top-8 left-8 w-6 h-6 bg-yellow-300 rounded-full'></div>
        <div className='absolute bottom-8 right-8 w-6 h-6 bg-yellow-300 rounded-full'></div>
      </div>
      <div className='flex-1'>
        <img
          src='/chef-femal.png'
          alt='Ms Naba'
          className='object-cover h-full w-full'
        />
      </div>
    </div>
  );
};
