// import CardData from "../pages/api/hello"
import react from "react"
import { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import Image from 'next/image'
import Link  from 'next/link'

function Card () {
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(false)
  const [isShow, setIsShow] = useState(true)
  // console.log(CardData)
  useEffect(() => {
    // setLoading(true)
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // setLoading(false)
        // debugger
        // console.log(data)
      })
  }, [])

  const loadMore = () => {
    if (!load) {
      setLoad(true)
      setIsShow(false)
    }
  }

  return (
    <section className='mt-36 mb-36'>
      <div className="max-w-screen-xl relative flex flex-wrap justify-center gap-x-8 gap-y-16 m-[auto] pb-14">
        {data &&
          data.map(data => (
              data.id <= 6 ? (
                <Link as={`/jobs/${data.path}`} href="/jobs/[path]" key={data.id}>
                  <a className="relative bg-dark-blue rounded-md py-12 px-8 min-w-[350px]">
                    <Image src={data.logo} alt={data.company} width={50} height={50} className="absolute -top-6 rounded-lg" loading='lazy' />
                    <p className="text-base text-dark-gray">
                      {data.postedAt}
                      <span className="mx-1">・</span>
                      {data.contract}
                    </p>
                    <h2 className="my-3	text-xl	font-bold">{data.position}</h2>
                    <p className="text-dark-gray">{data.company}</p>
                    <p className="mt-10 text-sm font-bold text-violet">{data.location}</p>
                  </a>
                  {/* <img src={data.logo} alt={data.company} width={50} height={50} className="absolute -top-6" />
                  <p className="text-base text-dark-gray">
                    {data.postedAt}
                    <span className="mx-1">・</span>
                    {data.contract}
                  </p>
                  <h2 className="my-3	text-xl	font-bold">{data.position}</h2>
                  <p className="text-dark-gray">{data.company}</p>
                  <p className="mt-10 text-sm font-bold text-violet">{data.location}</p> */}
                </Link>
              ) : null
            )
          )
        }
        {data &&
          data.map(data => (
              load && data.id >= 7 ? (
                // <div key={data.id} className="relative bg-dark-blue rounded-md py-12 px-8 min-w-[350px]">
                //   <img src={data.logo} alt={data.company} width={50} height={50} className="absolute -top-6 rounded-lg" />
                //   <p className="text-base text-dark-gray">
                //     {data.postedAt}
                //     <span className="mx-1">・</span>
                //     {data.contract}
                //   </p>
                //   <h2 className="my-3	text-xl	font-bold">{data.position}</h2>
                //   <p className="text-dark-gray">{data.company}</p>
                //   <p className="mt-10 text-sm font-bold text-violet">{data.location}</p>
                // </div>
                <Link as={`/jobs/${data.path}`} href="/jobs/[path]" key={data.id}>
                  <a className="relative bg-dark-blue rounded-md py-12 px-8 min-w-[350px]">
                    <Image src={data.logo} alt={data.company} width={50} height={50} className="absolute -top-6 rounded-lg" loading='lazy' />
                    <p className="text-base text-dark-gray">
                      {data.postedAt}
                      <span className="mx-1">・</span>
                      {data.contract}
                    </p>
                    <h2 className="my-3	text-xl	font-bold">{data.position}</h2>
                    <p className="text-dark-gray">{data.company}</p>
                    <p className="mt-10 text-sm font-bold text-violet">{data.location}</p>
                  </a>
                </Link>
              ) : null
            )
          )
        }
      </div>
      {isShow &&
        <div className="text-center">
          <button className="bg-violet rounded py-4 px-7 hover:bg-light-violet" onClick={loadMore}>Load More</button>
        </div>
      }
    </section>
  )
}

// export async function getStaticProps() {
//   // export async function getStaticProps() でも同じ
//     const res = await fetch('/pages/api/hello.js')
//     const posts = await res.json()

//     console.log(posts)
  
//     if (!posts) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { posts }, // will be passed to the page component as props
//     }
//   }

export default Card
