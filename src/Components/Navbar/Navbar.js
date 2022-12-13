import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'
                        aria-label='home'
                        title='home'
                        className='inline-flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className='w-8 text-violet-600'>
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </Link>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/about'
                                aria-label='about'
                                title='about'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/portfolio'
                                aria-label='portfolio'
                                title='portfolio'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                aria-label='contact'
                                title='contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full'>
                                <div className='p-5 border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='home'
                                                title='home'
                                                className='inline-flex items-center'
                                            >
                                                <svg
                                                    className='w-8 text-deep-purple-accent-400'
                                                    viewBox='0 0 24 24'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeMiterlimit='10'
                                                    stroke='currentColor'
                                                    fill='none'
                                                >
                                                    <rect x='3' y='1' width='7' height='12' />
                                                    <rect x='3' y='17' width='7' height='6' />
                                                    <rect x='14' y='1' width='7' height='6' />
                                                    <rect x='14' y='11' width='7' height='12' />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link
                                                    to='/about'
                                                    aria-label='about'
                                                    title='about'
                                                    className='font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/portfolio'
                                                    aria-label='portfolio'
                                                    title='portfolio'
                                                    className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/contact'
                                                    aria-label='contact'
                                                    title='contact'
                                                    className='font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
