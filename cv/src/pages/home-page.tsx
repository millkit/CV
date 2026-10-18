import { Calendar, Code, Flag, Folder, House } from 'lucide-react'
import { Link } from 'lucide-react'

import { useInView } from '@/hooks/useInView'
import { Progress } from '@/components/ui/progress'

export const HomePage = () => {
  const { ref: personalRef, isVisible: personalVisible } = useInView()
  const { ref: educationRef, isVisible: educationVisible } = useInView()
  const { ref: coursesRef, isVisible: coursesVisible } = useInView()
  const { ref: skillsRef, isVisible: skillsVisible } = useInView()
  return (
    <>
      <section
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
              <Link />
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
              <Link />
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
            <p>*what are you currently studying*</p>
          </div>
        </div>
      </section>
      <section
        ref={coursesRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          coursesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex h-10 w-full items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>COURSES</h2>
        </div>

        <div className='mt-4 space-y-8 text-lg'>
          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                *course name*
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>*date of courses*</p>
            </div>
            <p className='text-gray-400'>*kind of lesson*</p>
          </div>

          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                *course name*
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>*date of courses*</p>
            </div>
            <p className='text-gray-400'>*kind of lesson*</p>
          </div>

          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                *course name*
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>*date of courses*</p>
            </div>
            <p className='text-gray-400'>*kind of lesson*</p>
          </div>
        </div>
      </section>
      <section
        ref={skillsRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex h-10 w-full items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>SKILLS</h2>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-6 sm:grid-cols-2'>
          <div>
            <h2 className='mb-1 font-semibold'>*your skill and value*</h2>
            <Progress value={skillsVisible ? 95 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>*your skill and value*</h2>
            <Progress value={skillsVisible ? 90 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>*your skill and value*</h2>
            <Progress value={skillsVisible ? 95 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>*your skill and value*</h2>
            <Progress value={skillsVisible ? 95 : 0} />
          </div>
        </div>
      </section>
    </>
  )
}
