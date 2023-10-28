'use client'

import Link from "next/link";
import Image from "next/image";
import { Typography } from "../../materialTailwindExports";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import SocialNetworkLinks from "./SocialNetworkLinks";


export default function Footer() {
    
    const LINKS = [
        {
          title: "Pages",
          items: [{
            pageName: "Home",
            pageLink: "/",         
        }, 
        {
            pageName:"About",
            pageLink: "/about",
        },
        {
            pageName: "Projects",
            pageLink: "/projects",
        },
        {   
            pageName: "Docs",
            pageLink: "/docs",
        }],
        },
        {
          title: "Sections",
          items: [{
            pageName: "Services",
            pageLink: "#services",         
        }, 
        {
            pageName:"My-Projects",
            pageLink: "#myprojects",
        },
        {
            pageName: "Skills",
            pageLink: "#skills",
        },
        {   
            pageName: "Testimonials",
            pageLink: "#testimonials",
        }],
        },
        // {
        //   title: "Resource",
        //   items: ["Blog", "Newsletter", "Events", "Help center"],
        // },
      ];

    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="relative w-full footer pt-10 pb-3">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" width={70} height={70} alt='spex_logo' />
                        </Link>
                        <hr className="my-4 w-96"></hr>
                        <div className="flex flex-col gap-3 mt-7">
                            <div className="flex flex-row gap-3 items-center text-gray-400 hover:text-orange-600 transition">
                                <MapPinIcon className="h-5 w-5"/>
                                <Typography variant="small">
                                    Cité AADL Batiment n°14 P°22 Bab-Ezzouar, Alger
                                </Typography>
                            </div>
                            <div className="flex flex-row gap-3 items-center text-gray-400 hover:text-orange-600 transition">
                                <PhoneIcon className="h-5 w-5"/>
                                <Typography variant="small">
                                    <span className="hover:text-orange-900">
                                       <Link href="tel:+213540805712"> 0540-80-57-12 </Link>
                                    </span> 
                                    / 
                                    <span className="hover:text-orange-900"> 
                                        <Link href="tel:+213791997647"> 0791-99-76-47</Link>
                                    </span>
                                </Typography>
                            </div>
                            <div className="flex flex-row gap-3 items-center text-gray-400 hover:text-orange-600 transition">
                                <EnvelopeIcon className="h-5 w-5"/>
                                <Typography variant="small">
                                    islamnasseur95@gmail.com
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                        <ul key={title}>
                            <Typography
                            variant="h6"
                            className="mb-3 font-medium"
                            >
                            {title}
                            </Typography>
                            {items.map((item) => (
                            <li key={item.pageName}>
                                <Typography
                                as="a"
                                href={item.pageLink}
                                className="py-1.5 font-normal transition-colors text-gray-500 hover:text-orange-600 transition"
                                >
                                {item.pageName}
                                </Typography>
                            </li>
                            ))}
                        </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                <Typography
                    variant="small"
                    className="mb-4 text-center font-normal text-gray-400 md:mb-0"
                >
                    &copy; {currentYear} <a href="https://material-tailwind.com/">Spex Dev - Islam Nasseur</a>. All
                    Rights Reserved.
                </Typography>
                <SocialNetworkLinks/>
                </div>
            </div>
        </footer>
    )
}