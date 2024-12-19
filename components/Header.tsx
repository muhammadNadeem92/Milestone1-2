import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
        <header>
            <nav className='bg-blue-950 flex justify-between' >
                <ul className='flex  '>
                    <li className='ml-4 p-5 text-xl '><Link href='/' className='hover:text-orange-500'>Home</Link></li>
                    <li className='ml-4 p-5 text-xl '><Link href='/about' className='hover:text-orange-500'>About</Link></li>
                    <li className='ml-4 p-5 text-xl '><Link href='/services' className='hover:text-orange-500'>Services</Link></li>
                    <li className='ml-4 p-5 text-xl '><Link href='/contact' className='hover:text-orange-500'>Contact</Link></li>
                </ul>
            
            <div className='flex justify-center items-center  mr-4'>
                <input type="text" name="search" id="search" placeholder='search here something' className='p-2 mr-2 border rounded-3xl pl-3 hover:bg-slate-200 ' />
                <button className='p-2 px-3 mr-2 text-xl border rounded-md hover:bg-orange-500'>Sign Up</button>
                <button className='p-2 px-3  text-xl border rounded-md hover:bg-orange-500'>Login</button>
            </div>
            </nav>
        </header>
    </div>
  )
}

export default Header