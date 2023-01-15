import Image from 'next/image'
import Link from 'next/link'

function Header () {
  return (
    <header className="relative bg-header-pattern bg-no-repeat bg-cover rounded-bl-[100px] h-40">
      <div className="flex items-center justify-between pt-6 pl-28 pr-28">
        <Link href='/'>
          <h1 className="text-white text-3xl font-bold cursor-pointer">devjobs</h1>
        </Link>
        <div>
          <div className="flex items-center justify-between gap-4">
            <Image src="/header/icon-sun.svg" alt="light mode" width={20} height={20} />
            <label htmlFor="small-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
              <div className="w-9 h-5 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                dark:peer-focus:ring-violet rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-violet after:border-gray-300 after:border-violet after:rounded-full after:h-4 after:w-4
                after:transition-all dark:border-gray-600 peer-checked:bg-white hover:after:bg-light-violet">
              </div>
              {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span> */}
            </label>
            <Image src="/header/icon-moon.svg" alt="dark mode" width={20} height={20} />
          </div>
        </div>
      </div>
      {/* <div className='w-max min-w-[700px] absolute bottom-[-30px] left-1/2 -translate-x-2/4	'>
        <div className='flex items-center justify-center my-0 mx-auto bg-white rounded divide-x divide-solid divide-gray'> */}
          {/* <div className='flex items-center gap-3 py-5 px-8'>
            <Image src="/search/search.svg" alt="" width={20} height={20} />
            <input type="text" placeholder="Filter by title, companies, expertise…" className="min-w-[90%] placeholder:text-dark-blue placeholder:opacity-50 bg-white text-dark-blue focus:outline-none cursor-pointer" />
          </div>
          <div className='flex items-center gap-3 py-5 px-8'>
            <Image src="/search/location.svg" alt="" width={20} height={20} />
            <input type="text" placeholder="Filter by location…" className="placeholder:text-dark-blue placeholder:opacity-50 bg-white text-dark-blue focus:outline-none cursor-pointer" />
          </div> */}
          {/* <div className='flex items-center gap-7 py-5 px-8'> */}
            {/* <label htmlFor="full-time-only" className="flex items-center gap-3 text-dark-blue cursor-pointer focus:ring-red-500 font-bold">
              <input type="checkbox" id="full-time-only" className='bg-gray accent-violet' />
              Full Time Only
            </label> */}
            {/* <input type="checkbox" id="full-time-only" className='cursor-pointer bg-red-100 border-red-300 text-red-500 checked:ring-red-200'/>
            <label htmlFor="full-time-only" className="text-dark-blue cursor-pointer">
              Full Time Only
            </label> */}
            {/* <button className='rounded py-2 px-6 bg-violet cursor-pointer hover:bg-light-violet font-bold'>
              Search
            </button> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </header>
  )
}

export default Header
