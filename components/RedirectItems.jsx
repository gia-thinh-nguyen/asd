import React from 'react'
import Link from 'next/link';


const RedirectItems = ({redirectUrl,Icon,size,extraClass,target}) => {
  return (
    <Link href={redirectUrl} target={target}>
        <div className={`rounded-full shadow-lg shadow-gray-500  cursor-pointer hover:scale-105 ease-in duration-300 ${extraClass}`} >
            <Icon size={size} />
        </div>
    </Link>
  )
}

export default RedirectItems