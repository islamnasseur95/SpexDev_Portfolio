'use client'

import { 
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography, } from "../../materialTailwindExports";

export default function TimeLine(){

    const experiences = [{
        job_title: "Web developer",
        from_to_date: "29/11/2020 to 16/09/2021",
        company: "Emploipartner",
        job_description: ""
    },
    {
        job_title: "Web developer",
        from_to_date: "19/09/2021 to 21/02/2022",
        company: "GBConstruction",
        job_description: ""
    },
    {
        job_title: "Web & Mobile developer",
        from_to_date: "/11/2020 to 16/09/2021",
        company: "Emploipartner",
        job_description: ""
    },
    {
        job_title: "Web developer",
        from_to_date: "29/11/2020 to 16/09/2021",
        company: "Emploipartner",
        job_description: ""
    },
]

return(
    <div className="w-[32rem]">
        <Timeline>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                        Timeline Title Here.
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small" color="gary" className="font-normal text-gray-600">
                        The key to more success is to have a lot of pillows. Put it this way, it took me
                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                        luv.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                        Timeline Title Here.
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography variant="small" color="gary" className="font-normal text-gray-600">
                        The key to more success is to have a lot of pillows. Put it this way, it took me
                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                        luv.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                        Timeline Title Here.
                    </Typography>
                </TimelineHeader>
                <TimelineBody>
                    <Typography variant="small" color="gary" className="font-normal text-gray-600">
                        The key to more success is to have a lot of pillows. Put it this way, it took me
                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                        luv.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
        </Timeline>
    </div>
)
}