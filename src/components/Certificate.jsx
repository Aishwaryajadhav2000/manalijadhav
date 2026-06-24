import React, { useEffect, useState } from 'react'

export default function Certificate({ data, setDisplayCertificate }) {

  const [removeDisplay, setRemoveDisplay] = useState()

  return (
    <>
      <section className='fixed inset-1.5 m-3 text-red-900 font-bold flex justify-center items-center' onClick={() => setDisplayCertificate(null)}>
        <article className='bg-white w-full border border-red-950 rounded-2xl'>
          <article className='text-5xl flex justify-end'>
            <h1 onClick={() => setDisplayCertificate(null)}><i className="bi bi-x"></i></h1>
          </article>

          <article className='mt-1.5 p-5 mb-10 text-xl'>
            <p>{data.medal} {data.title}</p>
            <h1>{data.competition}</h1>
            <p>{data.year}</p>
            <p>{data.place}</p>
          </article>
        </article>
      </section>
    </>
  )
}
