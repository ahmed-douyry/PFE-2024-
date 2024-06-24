import React, { useEffect } from 'react';
import Slider from './Slider';
import ParentCard from './Cards';
import useAuthContext from '../context/Authcontext';
import ServicePedagogique from './ServicePedagogique';
import VideoGrid from './VideoGrid';
import Dev from './Devloppement';
import Filieres from './Nosfilieres';

export default function Home() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <>
      <div className='container mx-auto p-4'>
        
        <section className='mb-24'>
          <Slider />
        </section>
        <h1 className="text-2xl tracking-widest uppercase opacity-4 font-bold text-gray-800 ">
          DERNIÈRES ACTUALITÉS
        </h1>
        <hr className="border-1 border-gray-300" />
        <section className='mt-12'>
          <ParentCard />
        </section>
        <section className='mt-12'>
          <h2 className='text-xl font-semibold mb-2'>Service Pedagogique</h2>
          <hr className="border-1 border-gray-300" />

          <ServicePedagogique />
        </section>
        <section className='mt-12'>
          <h2 className='text-xl font-semibold mb-2'>Video de formation</h2>
          <hr className="border-1 border-gray-300" />

          <VideoGrid />
        </section>
        <Filieres />
      </div>
    </>
  );
}
