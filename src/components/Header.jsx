import React, { useState } from 'react'
import { Menu, X, Trophy } from "lucide-react";
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
     const [open, setOpen] = useState(false);
    return (
        <>
            <header className="w-full">
                <nav className="flex items-center justify-between py-5">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Trophy className="text-amber-400" size={35} />
                        <div>
                            <h1 className="text-[#F2B95E] text-xl font-bold">
                                Manali Jadhav
                            </h1>
                            <p className="text-gray-300 text-sm">
                                WRESTLING PLAYER
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10 text-white">
                        <li>
                            <a 
                                
                                className="border-b-2 border-amber-400 pb-1"
                            >
                             <button onClick={()=>navigate('/')}>   Home</button>
                            </a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#education">Education</a>
                        </li>

                        <li>
                            <a href="#certifications">Certifications</a>
                        </li>

                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-[#13132d] rounded-xl p-5 text-white">
                        <ul className="flex flex-col gap-4">
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#certifications">Certifications</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}
