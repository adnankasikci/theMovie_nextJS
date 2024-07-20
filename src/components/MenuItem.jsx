import Link from 'next/link'
import React from 'react'

const MenuItem = ({ mn }) => {
    return (
        <Link href={mn.url} className='hidden md:block'>
            {mn.name}
        </Link>
    )
}

export default MenuItem
