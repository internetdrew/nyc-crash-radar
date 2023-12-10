import { Header, CrashFeed } from '@components';

enum HomeHeader {
  Heading = 'NYC Crash Radar',
  Subheading = 'See reported vehicle crashes around New York City.',
}

const Home = () => {
  return (
    <div>
      <Header
        headingText={HomeHeader.Heading}
        subheadingText={HomeHeader.Subheading}
      />
      <CrashFeed />
    </div>
  );
};

export default Home;
