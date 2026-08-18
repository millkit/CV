import { Calendar, Flag, Folder, House } from "lucide-react";
import { useInView } from '@/hooks/useInView'
import {Link } from 'lucide-react';

export const HomePage = () => {
    const { ref: personalRef, isVisible: personalVisible } = useInView()
  return ( <section
        ref={personalRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          personalVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>PERSONAL DATA</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <p className='flex gap-1'>
            <House />
           *Street*, 01001, Kyiv, Kyiv City, Ukraine
          </p>
          <p className='flex gap-1'>
            <Folder /> *Email*
          </p>
          <p className='flex gap-1'>
            <Calendar />
            *Date of birth*
          </p>
          <p className='flex gap-1'>
            <Flag />
            Citizenship: Ukraine
          </p>
          <p>
            <a
              href='https://www.linkedin.com/in/dmytro-pokydko-b251a9353/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-500 transition hover:underline'
            >
              <Link/>
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href='https://github.com/millkit'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-500 transition hover:underline'
            >
              <Link/>
              GitHub
            </a>
          </p>
        </div>
      </section>
      )
};