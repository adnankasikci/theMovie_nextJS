import Movies from '@/components/Movies';
import React from 'react'

const Home = async ({ searchParams }) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b77e132a502a8225e14b53c9c3f3e1c7`, {
    next: { revalidate: 1000 }
  });

  const data = await res.json();

  return (
    <di className='grid grid-cols-4 gap-3 px-10 py-6'>
      {
        data?.results?.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))
      }
    </di>
  )
}

export default Home
