'use client'

import { Typography } from "../../materialTailwindExports"
import SocialNetworkLinks from "../_ReusableComponents/SocialNetworkLinks"



export default function AboutHeroSection() {
return(
<div className="hero-section-background h-96">
        <div className="container flex flex-col items-center justify-center mt-16 mx-auto xl:py-9">
            <div className="py-5 sm:py-1 xl:pl-4 flex flex-col text-center justify-center site-titles md:basis-2/5">
                <Typography className="uppercase items-center text-md md:text-lg lg:text-xl xl:text-2xl text-white">
                    FullStack Web developer
                </Typography>    
                <Typography className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-3.5 title-color ">
                    Nasseur Islam
                </Typography>
                <SocialNetworkLinks/>
            </div>
        </div>
    </div>
)
}