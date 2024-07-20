import Movies from '@/components/Movies';
import React from 'react'

const page = async ({ params }) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b77e132a502a8225e14b53c9c3f3e1c7&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json();



    console.log(keyword, "");
    return (
        <div>
            {
                !data?.results.length ?
                    <div>Aranılan Şeyi Bulamadık!!</div> :
                    <div className='grid grid-cols-4 gap-3 px-10 py-6'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default page
