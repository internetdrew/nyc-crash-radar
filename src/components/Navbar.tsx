const Navbar = () => {
  return (
    <nav className='px-4 py-3 backdrop-blur-sm sticky top-0 z-10 sm:backdrop-blur-none'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div className='text-xl font-bold bg-black text-stone-200 px-4 py-2'>
          NYC Crash Radar
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
