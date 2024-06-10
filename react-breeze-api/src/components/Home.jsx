import React, { useEffect } from 'react'
import useAuthcontext from '../context/Authcontext'
import Slider from './Slider';
import ParentCard from './Cards';

export default function Home() {
  const {user,getuser} = useAuthcontext()
  useEffect(()=>{
    if(!user){
      getuser();
    }
  },[])
  return (
    <>
    <div>
      {user?.name}
    </div>
    <Slider />
    <ParentCard />
    </>
  )
}
