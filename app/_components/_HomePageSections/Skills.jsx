'use client'

import Image from "next/image";
import Link from "next/link";
import { Typography, Button, Progress, Chip } from "../../materialTailwindExports"

export default function Skills() {

    const generalSkillsData = [
        {
            skill: "Front-end developement",
            percentage: "80%",
            progressValue: 80,
            color: "green"
        },
        {
            skill: "Mobile developement",
            percentage: "60%",
            progressValue: 60,
            color: "blue"
        },
        {
            skill: "MERN developement",
            percentage: "55%",
            progressValue: 55,
            color: "orange"
        },
        {
            skill: "CMS",
            percentage: "90%",
            progressValue: 90,
            color: "green"
        },
        {
            skill: "UX/UI design",
            percentage: "70%",
            progressValue: 70,
            color: "blue"
        },
    ]

    return (
        <div className="container w-full flex flex-col justify-center mt-12 mx-auto md:10/12 lg:w-9/12 xl:w-8/12" id="skills">
            <Chip variant="gradient" value="Skills" className="self-center mb-5 chip-background" />
            <Typography variant="paragraph" className="subtitle-text mb-8">
                Proficient in a range of technologies, from front-end to MERN stack developer with expertise in other skills.<br />Transforming visions into seamless online experiences. 
            </Typography>
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-0 items-center my-5 mx-auto">

                <div className="basis-3/5 md:basis-4/6 p-5 mx-3 border-black card-background rounded-lg shadow-sm shadow-black">
                    <Typography variant="h6" className="text-xs md:text-sm uppercase text-orange-900">
                        General skills
                    </Typography>
                    <Typography variant="h4" className="text-lg md:text-2xl mb-2 title-color">
                        Expertise in Front-End, Mobile, CMS, MERN Technologies and UX/UI
                    </Typography>
                    {generalSkillsData.map( (item, index) => (
                    <div className="w-full mb-5">
                        <div className="mb-3" key={index}>
                            <div className="mb-1 flex items-center justify-between gap-4">
                                <Typography variant="paragraph">
                                {item.skill}
                                </Typography>
                                <Typography  variant="paragraph">
                                {item.percentage}
                                </Typography>
                            </div>
                            <Progress value={item.progressValue} size="sm" color={item.color} />
                        </div>
                    </div>
                    ))}
                    <Link href="#" clLinkssName="inline-block">
                        <Button variant="text" className="flex items-center gap-2  contact-button">
                            View More
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                            </svg>
                        </Button>
                    </Link>
                </div>
                <div className="basis-2/4 p-5 mx-3">
                    <Image 
                        src="/islamnasseur_stylish.jpg"
                        width={500}
                        height={500}
                        alt="islam_working_pic"
                        className="rounded-full skew-y-3 shadow-lg shadow-indigo-500/50 bg-blend-darken"
                    />
                </div>
            </div>
        </div>
    )
}