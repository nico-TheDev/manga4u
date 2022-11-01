import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import {
  HiMenu,
  HiOutlineMoon,
  HiOutlineUserCircle,
  HiSearch,
} from 'react-icons/hi';

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

  const currentPath = pathname.slice(1); // remove the / at the beginning

  return (
    <nav className='mx-auto my-8 flex h-[10vh] w-[90%] items-center justify-between md:h-[15vh] md:items-start'>
      <Link href='/'>
        <a>
          <Image src={logo} alt='Main Logo' layout='fixed' width={200} />
        </a>
      </Link>

      <div className='grid max-w-lg flex-1 gap-4'>
        <form className='hidden rounded-md border-2 border-white px-2 py-1 md:flex'>
          <HiSearch className='icon' />
          <input
            type='text'
            className='flex-1 border-none bg-transparent p-0 px-2 text-white focus:outline-none'
            placeholder='Search for manga'
          />
        </form>

        <ul className='hidden items-center justify-between gap-8 md:flex'>
          {pathList.map((item) => (
            <li className='' key={item.name}>
              <Link href={item.path}>
                <a
                  className={`text-md border-b-4 border-b-transparent pb-2 font-bold capitalize text-white hover:border-b-primary-main hover:text-primary-main ${
                    currentPath === item.name &&
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

      <ul className='hidden items-center gap-2 md:flex'>
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

      {/* MENU BURGER */}

      <button className='md:hidden'>
        <HiMenu className='icon cursor-pointer' />
      </button>
    </nav>
  );
}
