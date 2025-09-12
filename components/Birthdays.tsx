import Image from 'next/image'
import { Button } from './ui/button'
const Birthdays = () => {
  return (
    <div className='w-full p-3 rounded-md box-shadow flex flex-col gap-3'>
      <h1 className="text-md font-medium text-gray-200 not-dark:text-gray-700">Birthdays</h1>
      <div className="rounded-md flex-col gap-3 flex items-center">
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image 
              src='https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg'
              width={48}
              height={48}
              alt="user-image"
              className='w-10 h-10 rounded-full object-cover'
            />
            <h4 className='text-gray-800 dark:text-white/90 text-sm font-medium'>
              Kingo
            </h4>
          </div>
          <Button>
            Celebrate
          </Button>
        </div>
        <div className='w-full flex items-center gap-3 rounded-md bg-gray-400/20 not-dark:bg-gray-400/30 p-3'>
          <Image 
          src="/gift.png"
          alt="gitf"
          width={50}
          height={50}
          className="w-15 opacity-70"
          />
          <div>
            <h4 className='font-medium text-md text-gray-100 not-dark:text-gray-800'>Upcomming birthdays</h4>
            <p className='text-sm text-gray-50/70 mt-1 not-dark:text-gray-600/80'>See other 16 have upcomming birthdays</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Birthdays