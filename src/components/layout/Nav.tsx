import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { HiOutlineMoon, HiOutlineUserCircle, HiSearch } from 'react-icons/hi';

import logo from '@/assets/img/logo.png';

const pathList = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: 'popular',
    name: 'popular',
  },
  {
    path: 'latest',
    name: 'latest',
  },
  {
    path: 'recent',
    name: 'recently added',
  },
];

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className='mx-auto my-8 flex h-[15vh] w-[90%] items-start justify-between'>
      <Link href='/'>
        <a>
          <Image src={logo} alt='Main Logo' layout='fixed' width={200} />
        </a>
      </Link>

      <div className='grid max-w-lg flex-1 gap-4'>
        <form className='flex rounded-md border-2 border-white px-2 py-1'>
          <HiSearch className='icon' />
          <input
            type='text'
            className='flex-1 border-none bg-transparent p-0 px-2 text-white focus:outline-none'
            placeholder='Search for manga'
          />
        </form>

        <ul className='flex items-center justify-between gap-8'>
          {pathList.map((item) => (
            <li className='' key={item.name}>
              <Link href={item.path}>
                <a
                  className={`text-md border-b-4 border-b-transparent pb-2 font-bold capitalize text-white hover:border-b-primary-main hover:text-primary-main ${
                    pathname === item.path &&
                    'border-b-primary-main text-primary-main'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className='flex items-center gap-2'>
        <li className=''>
          <button className=''>
            <HiOutlineMoon className='icon cursor-pointer' />
          </button>
        </li>
        <li className=''>
          <Link href='/signin'>
            <a>
              <HiOutlineUserCircle className='icon cursor-pointer' />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
