import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  return (
    <nav className='p-4'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div className='text-2xl font-semibold'>NYC Crash Radar</div>
        <div>
          <ul>
            <li>About</li>
          </ul>
          <button
            className='sm:hidden'
            onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
          >
            {mobileNavIsOpen ? (
              <HiX className='w-7 h-7' />
            ) : (
              <HiMenu className='w-7 h-7' />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
