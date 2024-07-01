"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full flex justify-center p-4">
            <nav className="flex justify-between items-center backdrop-blur-24px bg-[hsla(0,0%,100%,0.30)] rounded-full px-6 py-3 h-14 w-[760px]">
                <Link href="/home-korean" className="flex items-center space-x-2">
                    <img src="/NavLogo.svg" alt="Logo" className="h-10" /> {/* Adjust the height as needed */}
                    <span className="hidden md:inline text-2xl font-bold text-white">일반적인 선택 사항</span>
                </Link>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link href="/about-korean" className="text-white transition">
                            회사 소개
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-korean" className="text-white transition">
                            서비스
                        </Link>
                    </li>
                    <li className="relative">
                        <button onClick={() => setIsLangOpen(!isLangOpen)} className="text-white transition flex items-center space-x-2">
                            <span>Languages</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isLangOpen && (
                            <ul className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg">
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                                        English
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-korean" className="block px-4 py-2 hover:bg-gray-100">
                                        Korean
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-espanol" className="block px-4 py-2 hover:bg-gray-100">
                                        Español
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/contact-korean" className="px-4 py-2 bg-[#FFB81C] text-white rounded-full transition">
                            문의하기
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-1.5">
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>
            </nav>
            <div
                className={`fixed top-0 right-0 h-full w-64 backdrop-blur-24px bg-[hsla(0,0%,70%,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 left-4 text-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className="mt-16 flex flex-col space-y-2 p-4 items-center">
                    <li>
                        <Link href="/about-korean" className="text-white transition">
                            회사 소개
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-korean" className="text-white transition">
                            서비스
                        </Link>
                    </li>
                    <li className="relative">
                        <button onClick={() => setIsLangOpen(!isLangOpen)} className="text-white transition flex items-center space-x-2">
                            <span>Languages</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isLangOpen && (
                            <ul className="mt-2 bg-white text-gray-800 rounded shadow-lg">
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                                        English
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-korean" className="block px-4 py-2 hover:bg-gray-100">
                                        Korean
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-espanol" className="block px-4 py-2 hover:bg-gray-100">
                                        Español
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/contact-korean" className="w-3/4 px-4 py-2 bg-[#FFB81C] text-white text-center rounded-full transition">
                            문의하기
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;