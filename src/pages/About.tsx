import { Header } from '@components';

enum AboutHeader {
  Heading = 'About NYC Crash Radar',
}

const About = () => {
  return (
    <main className='max-w-xl mx-auto'>
      <Header headingText={AboutHeader.Heading} />
      <section className='mt-20 text-xl px-4 sm:px-0'>
        <p>
          The city of New York has many open data APIs available to the public.
          This project leverages{' '}
          <a
            href='https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95'
            target='_blank'
          >
            the Motor Vehicle Collisions - Crashes API
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default About;
