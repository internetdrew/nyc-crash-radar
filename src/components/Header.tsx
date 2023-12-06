const Header = () => {
  return (
    <header className='max-w-2xl mx-auto text-center mt-12 px-4 sm:px-0'>
      <h1 className='text-2xl bg-black text-slate-50 inline-block px-4 py-2 font-bold sm:text-3xl'>
        NYC Crash Radar
      </h1>
      <h2 className='text-xl sm:text-2xl'>
        See reported vehicle crashes around New York City.
      </h2>
    </header>
  );
};

export default Header;
