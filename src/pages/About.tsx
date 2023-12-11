import { Header } from '@components';

enum AboutHeader {
  Heading = 'About NYC Crash Radar',
}

const About = () => {
  return (
    <main className='max-w-xl mx-auto'>
      <Header headingText={AboutHeader.Heading} />
      <section className='my-20 text-xl px-4 sm:px-0 space-y-4'>
        <p>
          The city of New York has many open data APIs available to the public.
          This project leverages{' '}
          <a
            href='https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95'
            target='_blank'
            rel='noopener'
          >
            the Motor Vehicle Collisions - Crashes API
          </a>
          .
        </p>
        <p>
          This is Version 1 of the project, a simple UI of the information
          available via the API.
        </p>
        <p>
          What happens next? I'm not sure. But it's absolutely awesome that we
          have access to open data and I encourage others — whether you're a
          developer or not — to{' '}
          <a
            href='https://opendata.cityofnewyork.us/'
            target='_blank'
            rel='noopener'
          >
            explore the open data provided by various agencies within the
            beautiful city of New York
          </a>
          .
        </p>
        <p>
          This project is built by{' '}
          <a href='https://internetdrew.com' target='_blank' rel='noopener'>
            Andrew Rowley
          </a>
          , a New York City-based software developer. Feel free to reach out via{' '}
          <a
            href='https://www.linkedin.com/in/internetdrew/'
            target='_blank'
            rel='noopener'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href='https://twitter.com/_internetdrew'
            target='_blank'
            rel='noopener'
          >
            Twitter
          </a>
          . I look forward to hearing from you!
        </p>
      </section>
    </main>
  );
};

export default About;
