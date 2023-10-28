'use client'

import { Typography, Carousel, Card, CardHeader, Avatar, CardBody, Chip } from "../../materialTailwindExports"
import StarIcon from "../_ReusableComponents/StarIcon"

export default function Testimonials() {

    const testimonialsData = [
        {
            fullName: "Adel Tadjerouni",
            job: "Full stack developer",
            avatarImage: "/testimonial_images/adel.png",
            text: "His ability to dissect and resolve complex issues is a testament to his expertise as a full stack developer. Collaborating with him was a privilege that significantly elevated the quality and efficiency of our projects"
        },
        {
            fullName: "Fella Zellag",
            job: "Project Manager",
            avatarImage: "/testimonial_images/fella.png",
            text: "Working with Islam was a game-changer for our projects. His keen attention to detail, innovative ideas, and exceptional problem-solving skills were achieving our goals efficiently. His collaborative spirit and effective communication made him an invaluable asset to the team."
        },
        {
            fullName: "Anis",
            job: "IT service director",
            avatarImage: "/testimonial_images/anis.png",
            text: "Islam's exemplary technical proficiency and collaborative leadership were fundamental to our project achievements in Emploipartner. His adept problem-solving skills streamlined workflows, ensuring precise and timely deliveries"
        },
        {
            fullName: "Djanet",
            job: "Project Manager",
            avatarImage: "/testimonial_images/djanet.png",
            text: "Islam's contributions were indispensable to our project's success. His meticulous attention to detail and innovative problem-solving consistently impressed the team. His collaborative spirit and clear communication streamlined our workflow, making him a standout asset"
        },
        {
            fullName: "Hichem",
            job: "Front-end developer",
            avatarImage: "/testimonial_images/hichem.png",
            text: "Islam's mentorship has been a game-changer in my growth as a web developer. His expertise and patient guidance in troubleshooting technical challenges have been invaluable. Working alongside him, I've gained a deeper understanding of development nuances and greatly improved my skills"
        },
        {
            fullName: "Noor",
            job: "Full-stack developer",
            avatarImage: "/testimonial_images/noor.png",
            text: "Islam's technical prowess is nothing short of extraordinary. His keen problem-solving abilities have been a saving grace on numerous projects. His collaboration has elevated the entire team's performance, making him an invaluable asset to any development endeavor"
        },
        {
            fullName: "Imene",
            job: "Project Manager",
            avatarImage: "/testimonial_images/imy.png",
            text: "Islam's technical expertise was a game-changer for our projects. His swift and effective solutions to complex issues were invaluable. His collaborative spirit and dedication to excellence significantly elevated our team's performance"
        },
        {
            fullName: "Naim",
            job: "CEO of IT-GB @GBC",
            avatarImage: "/testimonial_images/naim.png",
            text: "Islam's web development expertise revolutionized our company departments, driving ITGB's growth. His commitment to excellence and unwavering dedication to our vision were invaluable. We're privileged to have worked with him as a pivotal force in our success story"
        },
        {
            fullName: "Ratiba Ouzlifi",
            job: "Full-stack developer",
            avatarImage: "/testimonial_images/ratiba.png",
            text: "Islam's humility and eagerness to learn have greatly impacted my growth as a web developer. His receptiveness to new skills and concepts in reflects a true passion for development. Collaborating with him has been an enriching experience, and I'm grateful for the knowledge he's shared"
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