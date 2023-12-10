import { Header } from '@components';

enum AboutHeader {
  Heading = 'About NYC Crash Radar',
  Subheading = 'An app built using the NYC Motor Vehicle Collisions - Crashes Public Safety API.',
}

const About = () => {
  return (
    <main className='max-w-xl mx-auto'>
      <Header
        headingText={AboutHeader.Heading}
        subheadingText={AboutHeader.Subheading}
      />
    </main>
  );
};

export default About;
