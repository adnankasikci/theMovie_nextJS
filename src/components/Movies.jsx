"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({ dt }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='relative min-w-[50px] min-h-[300px] cursor-pointer text-white'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
                alt={dt?.title || "Movie Poster"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
            />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-indigo-500 dark:from-indigo-950 to-transparent'>
                <p className='text-2xl font-bold'>{dt.title}</p>
                <div>{dt.release_date} - {dt.vote_average}</div>
            </div>
        </div>
    )
}

export default Movies
