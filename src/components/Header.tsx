interface HeaderProps {
  headingText: string;
  subheadingText: string;
}

const Header = ({ headingText, subheadingText }: HeaderProps) => {
  return (
    <header
      id='top'
      className='max-w-2xl mx-auto text-center mt-12 px-4 sm:px-0'
    >
      <h1 className='text-2xl bg-black text-stone-200 inline-block px-4 py-2 font-bold sm:text-3xl'>
        {headingText}
      </h1>
      <h2 className='text-xl sm:text-2xl'>{subheadingText}</h2>
    </header>
  );
};

export default Header;
