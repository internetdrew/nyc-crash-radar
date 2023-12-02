import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className='py-4 px-4'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div className='text-2xl font-semibold'>NYC Crash Radar</div>
        <div>
          <ul>
            <li>About</li>
          </ul>
          <HiMenu className='sm:hidden w-7 h-7' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
