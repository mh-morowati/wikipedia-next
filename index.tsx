"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='mt-4'>
      <div>
        <div className='w-8 h-8 cursor-pointer relative top-14 left-10 opacity-85' onClick={toggleMenu}>
          <hr className='w-5 border-stone-950 border-2 my-1' />
          <hr className='w-5 border-stone-950 border-2 my-1' />
          <hr className='w-5 border-stone-950 border-2' />
        </div>
        <div className={`w-[240px] h-[490px] border absolute top-24 left-10 z-50 bg-gray-50 shadow-md p-2 ${menuVisible ? 'block' : 'hidden'}`}>
          <b className='inline-block'>Main menu</b>
          <small className='ml-6 bg-slate-200 rounded-sm cursor-pointer hover:bg-slate-50'>move to sidebar</small>
          <hr />
        <div className='cursor-pointer text-sky-600 text-sm'>
          <h1 className='my-3 hover:underline'>Main page</h1>
          <h1 className='my-3 hover:underline'>Contents</h1>
          <h1 className='my-3 hover:underline'>Current events</h1>
          <h1 className='my-3 hover:underline'>Random article</h1>
          <h1 className='my-3 hover:underline'>About Wikipedia</h1>
          <h1 className='my-3 hover:underline'>Contact us</h1>
          <h1 className='my-3 hover:underline'>Donate</h1>
          <h1 className='my-3 hover:underline'>Contribute</h1>
          <hr />
          <h1 className='my-3 hover:underline'>Help</h1>
          <h1 className='my-3 hover:underline'>Learn to edit</h1>
          <h1 className='my-3 hover:underline'>Community portal</h1>
          <h1 className='my-3 hover:underline'>Recent changes</h1>
          <h1 className='my-3 hover:underline'>Upload file</h1>
        </div>
        </div>
      </div>
      <div className='left-[100px] relative inline-block'>
        <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">
          <Image className='inline-block' alt='wikipedia' width={50} height={50} src={'/wikipedia.png'} />
          <div className='inline-block left-3 top-4 font-serif relative'>
            <h1 className='text-[22px]'>WIKIPEDIA</h1>
            <p className='text-xs drop-shadow-2xl'>The Free Encyclopedia</p>
          </div>
        </a>
      </div>
      <div className='inline-block left-[190px] relative'>
        <input className='w-[450px] p-[3px] border rounded-sm border-zinc-400	' placeholder='Search Wikipedia' type="text" />
        <button className='border p-[3px] rounded-r-sm border-zinc-400 bg-zinc-100 w-18 font-bold hover:opacity-85 hover:pl-1'>Search</button>
      </div>
      <div className='float-right'>
        <Link className='text-sky-600 cursor-pointer hover:underline' href={'/create-account'}>Create account</Link>
        <Link className='text-sky-600 cursor-pointer hover:underline' href={'/login'}> &nbsp;&nbsp;Log in</Link>
      </div>
      <div className='w-[920px] mt-20 relative left-[360px]'>
        <hr className='border-zinc-500' /><hr className='relative top-9 border-slate-300' />
      </div>
    </div>
  )
}
