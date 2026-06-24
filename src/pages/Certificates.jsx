import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Certificates() {

  const location = useLocation();
  const getCertificates = location.state?.certificate;
  const[expand , setExpand] = useState(false)

  useEffect(() => {
    console.log("certificates", getCertificates)
  })


  return (
    <>
      <section className='gap-5 md:grid-cols-3 md:grid'>
        {
          getCertificates.map((item) => (
            <article className={`min-w-[320px] md:min-w-[350px] bg-[#F7F2EE] rounded-xl p-5 shadow-lg border-b-4`} onClick={()=>setExpand(!expand)} key={item.id}>
                <h1 className='font-semibold text-xl'>{item.competition} - {item.year}</h1>
                {
                  expand  && (
                    <div>
                      <h1 className='text-amber-700 font-bold'>{item.title}</h1>
                      <h1>Place : {item.place}</h1>
                    </div>
                  )
                }
            </article>
          ))
        }
      </section>
    </>
  )
}
