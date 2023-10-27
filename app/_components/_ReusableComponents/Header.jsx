'use client'

import Image from 'next/image';
import Button from "./Contact_button";
import Link from 'next/link';

import {
Navbar,
MobileNav,
Typography,
IconButton, } from "../../materialTailwindExports";

import { useState, useEffect } from "react";


export default function Header() {

const [openNav, setOpenNav] = useState(false);

useEffect(() => {
window.addEventListener(
"resize",
() => window.innerWidth >= 960 && setOpenNav(false)
);
}, []);

const navList = (
<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography as="li" variant="small" className="p-1 navbar-elements" color='white'>
        <Link href="/" className="flex items-center">
        Home
        </Link>
    </Typography>
    <Typography as="li" variant="small" color="blue-gray" className="p-1 navbar-elements line-through">
        {/* <Link href="/about" className="flex items-center"> Disabled temporarely for maintenance */} 
        About
        {/* </Link> */}
    </Typography>
    <Typography as="li" variant="small" color="blue-gray" className="p-1 navbar-elements line-through">
        {/* <Link href="/projects" className="flex items-center"> Disabled temporarely for maintenance */}
        Projects
        {/* </Link> */}
    </Typography>
    <Typography as="li" variant="small" color="blue-gray" className="p-1 navbar-elements line-through">
        {/* <Link href="#" className="flex items-center"> Disabled temporarely for maintenance */}
        Docs
        {/* </Link> */}
    </Typography>
</ul>
);

return (
<div className="menu relative flex flex-row align-center">
    <Navbar className="fixed top-0 left-0 right-0 mb-5 z-30 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 navbar-color" variant="gradient"
        >
        <div className="flex items-center justify-around text-blue-gray-900">
            <Link href="/">
                <Image src="/logo.png" width={70} height={70} alt='spex_logo' />
            </Link>
            <div className="flex items-center gap-4">
                <nav className="mr-4 hidden lg:block">{navList}</nav>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block" />
                <IconButton 
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false} onClick={()=> setOpenNav(!openNav)}
                    >
                    {openNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor"
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                </IconButton>
            </div>

        </div>
        <MobileNav open={openNav}>
            {navList}
        </MobileNav>
    </Navbar>
</div>
)
}