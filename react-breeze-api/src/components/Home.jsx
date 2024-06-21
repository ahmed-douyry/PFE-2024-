import React, { useEffect } from 'react';
import useAuthcontext from '../context/Authcontext';
import Slider from './Slider';
import ParentCard from './Cards';

export default function Home() {
  const { user, getuser } = useAuthcontext();

  useEffect(() => {
    if (!user) {
      getuser();
    }
  }, []);

  return (
    <>
      <div className='container mx-auto p-4  '>
        <h1 className='text-2xl font-bold mb-4'>Welcome, {user?.name}</h1>
        <section className='mb-24'>
          <h2 className='text-xl font-semibold mb-2'>Slider Section</h2>
          <Slider />
        </section>
        <h1 className="text-2xl tracking-widest uppercase opacity-4 font-bold text-gray-800 mb-4">
        DERNIÈRES ACTUALITÉS
      </h1>
      <hr className="border-1 border-gray-300" />
        <section className='mt-12'>
          <h2 className='text-xl font-semibold mb-2'>Cards Section</h2>
          <ParentCard />
        </section>
      </div>
    </>
  );
}