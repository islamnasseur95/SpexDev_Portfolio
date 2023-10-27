'use client'

import Image from "next/image";
import  { useState } from 'react'
import { Typography, Input, Button  } from "@material-tailwind/react";

export default function HeroSection() {

const [email, setEmail] = useState("");
const onChange = ({ target }) => setEmail(target.value);

return (
    <div className="hero-section-background md:h-96">
        <div className="container flex flex-col mt-14 mx-auto md:py-9 md:gap-14 xl:gap-1 md:justify-center md:flex-row xl:py-9 xl:justify-evenly">
            <div className="py-5 sm:py-1 xl:pl-4 flex flex-col text-center sm:text-left justify-center site-titles md:basis-2/5">
                <p>Hello everyone !</p>
                <Typography className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-3.5 text-white">
                    I'm A <span className="title-color">MERN Stack Developer</span>
                </Typography>    
                <Typography className="text-sm lg:text-base xl:text-lg">Self-taught web developer skilled in React, React Native, and Node.js. Quick learner, great communicator,
                    and
                    adaptable problem solver. Let's bring your projects to life!
                </Typography>
                <div className="relative flex w-full max-w-[24rem] py-4">
                    <Input
                        type="email"
                        label="Email Address"
                        color={email ? "white" : "gray"}
                        value={email}
                        onChange={onChange}
                        className="pr-20 border-gray-200 focus:border-gray-900"
                        containerProps={{
                        className: "min-w-0 "
                        }}
                    />
                    <Button
                        size="sm"
                        // color={email ? "red" : "gray"}
                        disabled={!email}
                        className="!absolute right-1 top-5 rounded subscribe-button"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="my-image self-center">
                <Image src="/islamnasseur.png" width={300} height={250} alt="islamnasseur_image" />
            </div>
        </div>
    </div>
)
}
