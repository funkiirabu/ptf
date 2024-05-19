'use client';
import Hero from './Hero';

function HomePage() {
    return (
      <>
        <div
          id='container'
          className='flex flex-col px-4 mx-auto max-w-screen-2xl gap-3 sm:gap-4'>
          <Hero />
        </div>
      </>
    );
  }

  export default HomePage;