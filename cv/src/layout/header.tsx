import avatar from '@/assets/avatar.jpg'

export const Header = () => {
  return (
    <header className='container mt-4'>
      <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
        <h1 className='text-center text-2xl font-bold sm:text-left sm:text-4xl lg:text-6xl'>
          DMYTRO POKYDKO
        </h1>
        <img
          src={avatar}
          alt='Avatar'
          className='h-32 w-32 sm:h-48 sm:w-48'
          loading='lazy'
        />
      </div>

      <div className='mt-6 h-3 w-full bg-black'></div>
    </header>
  )
}
