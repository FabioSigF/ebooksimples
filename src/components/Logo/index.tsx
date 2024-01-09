import React from 'react'
import { HiOutlineBookmarkSquare } from "react-icons/hi2";

const Logo = () => {
  return (
    <div className='flex gap-2 items-center whitespace-nowrap'>
      <HiOutlineBookmarkSquare className='text-3xl text-primary-100'/>
      <h1 className='uppercase text-white tracking-tighter'>Sua marca</h1>
    </div>
  )
}

export default Logo