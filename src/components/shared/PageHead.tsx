import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdOutlineGridView } from 'react-icons/md';

interface IProps {
  title: string;
  children?: React.ReactNode;
  sortType?: boolean;
}

export default function PageHead({ title, children }: IProps) {
  return (
    <>
      <section className='mx-auto w-[90%]'>
        <div className='flex justify-between'>
          <h1 className='mb-8 text-3xl text-white'>{title}</h1>

          <div className='flex items-center'>
            <button className='group flex items-center gap-2 text-xl text-white'>
              <AiOutlineUnorderedList className='icon group-hover:text-primary-main' />
            </button>
            <button className='flex items-center gap-2 text-xl text-white group-hover:text-primary-main'>
              <MdOutlineGridView className='icon' />
            </button>
          </div>
        </div>
        {children}
      </section>
    </>
  );
}
