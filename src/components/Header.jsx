"use client"
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () => {

    const [keyword, setKeyword] = useState('');
    const router = useRouter();

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        },
    ]

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`);
            setKeyword('')
        }
    };


    return (
        <div className='flex items-center gap-7 h-20 p-5'>
            <div className='bg-indigo-600 rounded-lg p-3 text-2xl font-bold text-white dark:bg-indigo-950 '>MovieApp</div>
            <div className='flex items-center gap-2 border p-3 flex-1 rounded-lg'>
                <input
                    onKeyDown={searchFunc}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder='Arama Yapınız...'
                    className='outline-none flex-1 bg-transparent'
                    type="text"
                    value={keyword}
                />
                <BiSearch size={25} />
            </div>
            <ThemeComp />
            {
                menu.map((mn, i) => (
                    <MenuItem mn={mn} key={i} />
                ))
            }
        </div>
    )
}

export default Header