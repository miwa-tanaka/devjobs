import Image from 'next/image'

function Search () {
  return (
    // <div className='w-max min-w-[700px] absolute bottom-[-30px] left-1/2 -translate-x-2/4	'>
    <section className='w-max min-w-[1100px] h-20 absolute top-28 left-1/2 -translate-x-2/4	'>
      <div className='h-20 flex items-center justify-between my-0 mx-auto bg-white rounded divide-x divide-solid divide-gray'>
        <div className='w-2/5 h-20 flex items-center gap-3 pl-8'>
          <Image src="/search/search.svg" alt="" width={20} height={20} />
          <input type="text" placeholder="Filter by title, companies, expertise…" className="min-w-[90%] placeholder:text-dark-blue placeholder:opacity-50 bg-white text-dark-blue focus:outline-none" />
        </div>
        <div className='h-20 flex items-center gap-3 pl-8'>
          <Image src="/search/location.svg" alt="" width={20} height={20} />
          <input type="text" placeholder="Filter by location…" className="placeholder:text-dark-blue placeholder:opacity-50 bg-white text-dark-blue focus:outline-none" />
        </div>
        <div className='h-20 flex items-center gap-7 px-8'>
          <label htmlFor="full-time-only" className="flex items-center gap-3 text-dark-blue focus:ring-red-500 font-bold cursor-pointer">
            <input type="checkbox" id="full-time-only" className='bg-gray accent-violet' />
            Full Time Only
          </label>
          {/* <input type="checkbox" id="full-time-only" className='cursor-pointer bg-red-100 border-red-300 text-red-500 checked:ring-red-200'/>
          <label htmlFor="full-time-only" className="text-dark-blue cursor-pointer">
            Full Time Only
          </label> */}
          <button className='rounded py-2 px-6 bg-violet cursor-pointer hover:bg-light-violet font-bold'>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Search
