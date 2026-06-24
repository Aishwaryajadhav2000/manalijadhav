import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Certificate from './Certificate';

export default function SumoCert() {

    const navigate = useNavigate()
    const [dsiplayCertificate, setDisplayCertificate] = useState(null)

    const certificates = [
        {
            id: 1,
            title: "Winner",
            competition: "State Wrestling Championship",
            place: "Maharashtra State",
            year: "2022",
            medal: "🥇",
            border: "border-orange-400",
        },
        {
            id: 2,
            title: "Silver Medalist",
            competition: "National Wrestling Championship",
            place: "New Delhi",
            year: "2023",
            medal: "🥈",
            border: "border-blue-400",
        },
        {
            id: 3,
            title: "Bronze Medalist",
            competition: "National School Games",
            place: "Guwahati",
            year: "2019",
            medal: "🥉",
            border: "border-green-400",
        },
        {
            id: 4,
            title: "Bronze Medalist",
            competition: "National School Games",
            place: "Guwahati",
            year: "2019",
            medal: "🥉",
            border: "border-green-400",
        }
    ];

    const viewCertificate = (certificates) => {
        navigate('/cerificates', { state: { certificate: certificates } })
    }
    return (
        <>

            <section className="bg-gradient-to-r from-[#1B1340] via-[#5B234E] to-[#A34E64] py-10 mb-5 mt-5">
                <div className="flex justify-center">
                    <h2 className="text-[#F2B95E] font-bold uppercase">
                        Certifications & Achievements
                    </h2>
                </div>

            </section>

            {/* {
                dsiplayCertificate && (
                    <section className='bg-purple-400'>
                        <Certificate data={dsiplayCertificate} setDisplayCertificate={setDisplayCertificate}></Certificate>
                    </section>
                )
            } */}

            <section className="bg-gradient-to-r from-[#1B1340] via-[#5B234E] to-[#A34E64] py-5">

                {/* Heading */}
                <div className="flex px-5 gap-4 items-center mb-5">
                    <div className="flex-1 h-[1px] bg-[#D6A26E]"></div>
                    <h2 className="text-[#F2B95E] font-bold uppercase">
                        Sumo
                    </h2>
                    <div className="flex-1 h-[1px] bg-[#D6A26E]"></div>
                </div>

                {
                    dsiplayCertificate && (
                        <div className=''>
                            <Certificate data={dsiplayCertificate} setDisplayCertificate={setDisplayCertificate}></Certificate>
                        </div>
                    )
                }

                {/* Scroll Container */}
                {/* <div className="flex overflow-x-auto md:overflow-x-auto gap-5 px-5 snap-x snap-mandatory md:snap-x md:snap-mandatory scrollbar-hide"> */}
                <div className="flex px-5 gap-5 overflow-x-auto scroll-smooth md:scroll-auto scrollbar-none md:scrollbar-thin overflow-auto">

                    {certificates.map((item) => (
                        <article key={item.id}
                            className={`snap-center min-w-[320px] md:min-w-[350px] bg-[#F7F2EE] rounded-xl p-5 shadow-lg border-b-4 ${item.border}`} onClick={() => setDisplayCertificate(item)}>
                            <div className="flex gap-4">

                                <div className="text-4xl">
                                    {item.medal}
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-orange-600">
                                        {item.title}
                                    </h3>

                                    <p className="font-semibold mt-2">
                                        {item.competition}
                                    </p>

                                    <p className="text-gray-600 mt-3">
                                        {item.place}
                                    </p>

                                    <p className="text-gray-500">
                                        {item.year}
                                    </p>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

                <div>
                    <h2 className="text-[#F2B95E] font-bold uppercase justify-end flex mt-5 mr-5">
                        <button onClick={() => viewCertificate(certificates)}>View all</button>
                    </h2>
                </div>

                {/* Dots */}
                {/* <div className="flex justify-center gap-2 mt-6">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div> */}

            </section>



        </>
    )
}
