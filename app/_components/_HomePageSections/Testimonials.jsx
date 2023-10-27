'use client'

import { Typography, Carousel, Card, CardHeader, Avatar, CardBody, Chip } from "../../materialTailwindExports"
import StarIcon from "../_ReusableComponents/StarIcon"

export default function Testimonials() {

    const testimonialsData = [
        {
            fullName: "Adel Tadjerouni",
            job: "Full stack developer",
            avatarImage: "/testimonial_images/adel.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Fella Zellag",
            job: "Project Manager",
            avatarImage: "/testimonial_images/fella.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Anis",
            job: "IT service director",
            avatarImage: "/testimonial_images/anis.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Djanet",
            job: "Project Manager",
            avatarImage: "/testimonial_images/djanet.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Hichem",
            job: "Front-end developer",
            avatarImage: "/testimonial_images/hichem.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Noor",
            job: "Full-stack developer",
            avatarImage: "/testimonial_images/noor.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Imene",
            job: "Project Manager",
            avatarImage: "/testimonial_images/imy.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Naim",
            job: "CEO of IT-GB @GBC",
            avatarImage: "/testimonial_images/naim.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Ratiba Ouzlifi",
            job: "Full-stack developer",
            avatarImage: "/testimonial_images/ratiba.png",
            text: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
        },
        {
            fullName: "Halima",
            job: "Front-end developer",
            avatarImage: "/testimonial_images/halimus.jpeg",
            text: "Islam and I worked on WordPress projects together, and I can say that he is a serious developer who consistently delivers creative solutions, communicates effectively, and is a friendly collaborator. A valuable asset to any team."
        },
    ]

    return(
        <div className="container w-full flex flex-col my-10 mx-auto md:10/12 lg:w-9/12 xl:w-8/12" id="testimonials">
            <Chip variant="gradient" value="Testimonials" className="self-center mb-5 chip-background" />
            <Typography variant="paragraph" className="subtitle-text">
                Dive into real, unfiltered stories from delighted colleagues and clients who have shared their experience with me
            </Typography>

            <Carousel className="rounded-xl mt-14 top-2" navigation={false} loop={true} autoplay={true} number={5000}>
                {testimonialsData.map(({fullName, job, avatarImage, text}, index) => (
                    <div className="flex flex-1 p-5 justify-center">
                        <Card color="red" shadow={true} className="w-full card-background max-w-xl px-8 mb-5" key={index}>
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >
                                <Avatar
                                size="md"
                                variant="circular"
                                alt="Islam Nasseur"
                                className="border-2 border-orange-400"
                                src={avatarImage}
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <Typography className="text-lg md:text-2xl text-semi-bold title-color">
                                        {fullName}
                                        </Typography>
                                        <div className="flex items-center gap-0">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        </div>
                                    </div>
                                    <Typography className="text-xs md:text-sm text-orange-900">{job}</Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                                <Typography className="text-sm">
                                &quot;{text}&quot;
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}