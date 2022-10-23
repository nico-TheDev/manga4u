import Link from 'next/link';
import React from 'react';

type Props = {
  genre: string;
  id: string;
};

export default function Pill({ genre, id }: Props) {
  return (
    <Link href={`/genre/${id}`}>
      <a className='inline-block rounded-full border-2 border-primary-main bg-primary-main py-1 px-3 text-sm text-white duration-150 ease-linear hover:-translate-y-1 hover:brightness-75'>
        {genre}
      </a>
    </Link>
  );
}
