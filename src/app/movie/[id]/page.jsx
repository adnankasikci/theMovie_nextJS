import React from 'react'
import Image from 'next/image';

const getMovies = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b77e132a502a8225e14b53c9c3f3e1c7`);
    return await res.json();

}

const page = async ({ params }) => {
    const id = params.id
    const movieDetail = await getMovies(id);
    return (
        <div className='relative w-full min-h-[45rem] object-cover '>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
                alt={movieDetail?.title || "Movie Poster"}
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
            <div className='absolute h-full w-full bg-gradient-to-r from-indigo-500 dark:from-indigo-950 to-transparent p-7 text-white '>
                <div className='absolute'>
                    <div className='text-4xl font-bold  '>{movieDetail?.title}</div>
                    <div className='w-2/6 my-6'>{movieDetail?.overview}</div>
                    <div className='my-6'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                    <div className='my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer'>Trail</div>
                </div>
            </div>
        </div>
    )
}

export default page
