import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdOutlineGridView } from 'react-icons/md';

import CoverCard from '@/components/CoverCard';

import { MangaSummary } from '@/types/data-types/manga';

interface IProps {
  title: string;
  mangaList: MangaSummary[];
  children?: React.ReactNode;
}

export default function MangaPageList({ title, mangaList }: IProps) {
  // const [viewType, setViewType] = useState<'card' | 'list'>('card');

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
        {/* MANGA COVER GRID */}
        <div className=' grid auto-rows-[18rem] grid-cols-2  place-items-center gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-5'>
          {mangaList.map((manga: MangaSummary) => (
            <CoverCard key={manga.mangaId} manga={manga} />
          ))}
        </div>
      </section>
    </>
  );
}
