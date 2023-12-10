import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='px-4 py-3 backdrop-blur-sm sticky top-0 z-10 sm:backdrop-blur-none'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <Link
          to='/'
          className='text-xl font-bold bg-black text-stone-200 px-4 py-2'
        >
          NYC Crash Radar
        </Link>
        <ul>
          <li>
            <Link
              to={'/about'}
              className='text-lg font-semibold underline-offset-2 transition duration-300  hover:underline'
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
