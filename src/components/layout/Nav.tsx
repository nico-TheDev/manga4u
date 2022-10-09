import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { HiOutlineMoon, HiOutlineUserCircle, HiSearch } from 'react-icons/hi';

import logo from '@/assets/img/logo.png';

export default function Nav() {
  return (
    <nav className='mx-auto flex h-[15vh] w-[90%] items-center justify-between'>
      <Image src={logo} alt='Main Logo' layout='fixed' />

      <form className='flex rounded-md border-2 border-white px-2 py-1'>
        <HiSearch className='icon' />
        <input
          type='text'
          className='focus: border-none bg-transparent p-0 px-2 text-white '
          placeholder='Search for manga'
        />
      </form>

      <ul className='flex items-center gap-2'>
        <li className=''>
          <Link href=''>
            <HiOutlineMoon className='icon' />
          </Link>
        </li>
        <li className=''>
          <Link href=''>
            <HiOutlineUserCircle className='icon' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
