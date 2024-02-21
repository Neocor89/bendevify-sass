import { UserButton } from '@clerk/nextjs';

// TODO
//! RESTART HERE
//: TESTING CLERCK AUTH

const Home = () => {
  return (
    <div>
      Home
      <UserButton afterSignOutUrl='/' />
    </div>
  )
};

export default Home;