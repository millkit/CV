import { Calendar, Flag, Folder, House } from "lucide-react";
import { Link } from 'lucide-react';
import { useInView } from '@/hooks/useInView'

export const HomePage = () => {
    const { ref: personalRef, isVisible: personalVisible } = useInView()
    const { ref:educationRef, isVisible: educationVisible } = useInView()
  return (<> <section
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
   

    <section
        ref={educationRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          educationVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>EDUCATION</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <div className='flex justify-between'>
            <p className='flex gap-1 font-semibold'>
              Kyiv National Economic University named after Vadym Hetman
            </p>
            <p className='text-gray-400'>2024 - Present</p>
          </div>
          <p className='mt-6 sm:mt-2'>
            Bachelor’s Degree, Computer Science (Specialty 122){' '}
            <span className='font-semibold'>3rd-year student</span>
          </p>
          <div className='mt-8'>
            <p>
              *what are you currently studying*

            </p>
          </div>
        </div>
      </section>
      </>)
};