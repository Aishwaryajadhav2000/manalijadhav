import React from 'react'
// import {FaGraduationCap} from "react-icons/fa"

export default function Eductaion() {

    const educationDetails = [
        { id: 1, degree: "Master of Arts", year: "2022-23", cgpi: 7.8, university: "mumbai" },
        { id: 2, degree: "Bachelor of Arts", year: "2022-23", cgpi: 7.8, university: "mumbai" },
        { id: 3, degree: "12th", year: "2022-2023", cgpi: 7.8, university: "mumbai" },
        { id: 4, degree: "10th", year: "2022-23", cgpi: 7.8, university: "mumbai" }
    ]

    return (
        <>

            <section id='education' className='bg-[#F8F4EF] py-6 px-5 rounded-xl mt-5'>

                {/* HEading */}
                <article className='flex items-center gap-4 mb-4'>
                    <i className="bi bi-mortarboard"></i>
                    <h2 className="text-2xl font-bold text-[#7A294A] uppercase">Education</h2>
                    <div className="flex-1 h-[2px] bg-[#C7A27A]"></div>
                </article>

                {/* Desktop View */}

                <article className='hidden md:flex justify-center items-center gap-10 px-5'>
                    {
                        educationDetails.map((details, index) => (
                            <React.Fragment key={details.id}>
                                <article className="relative bg-white w-[250px] p-6 rounded-xl shadow-md text-center mt-8">

                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#6D214F] text-white flex items-center justify-center">
                                        🎓
                                    </div>
                                   

                                    <h3 className="font-bold mt-5">
                                        {details.degree}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {details.university}
                                    </p>

                                </article>

                                {/* Connector Line */}
                                {index !== educationDetails.length - 1 && (
                                    <div className="w-12 h-[2px] bg-[#6D214F]"></div>
                                )}

                            </React.Fragment>
                        ))
                    }
                </article>



                {/* Mobile view */}
                <article className='md:hidden px-5 relative ml-4'>

                    <div className='absolute left-0 top-0 h-full w-[2px] bg-[#B37D52]'></div>

                    {
                        educationDetails.map((details, index) => (
                            <article key={details.id} className="relative pl-5 pb-5">
                                {/* Icon */}
                                <div
                                    className={`absolute -left-[7px] top-2 w-4 h-4 rounded-full ${index < 2
                                        ? "bg-[#6D214F]"
                                        : "bg-[#B37D52]"
                                        }`}
                                ></div>

                                <h3 className="font-bold text-lg text-gray-800">
                                    {details.degree}
                                </h3>

                                <p className="text-gray-600">
                                    {details.university}
                                </p>

                                <p className="text-[#7A294A] font-semibold">
                                    {details.year}
                                </p>

                            </article>
                        ))
                    }
                </article>
            </section>

        </>
    )
}
