import {
Card,
CardBody,
Typography, } from "../../materialTailwindExports";

import Image from "next/image";



export default function Services() {

    const myServices = [
        {
            id: 1,
            icon: "/services_logos/webgraphy.png",
            alt: "webgraphy_icon",
            title: "Motion & Web Graphy",
        },
        {
            id: 2,
            icon: "/services_logos/uxuidesign.png",
            alt: "uxuidesign_logo",
            title: "Ux/Ui Consultancy",
        },
        {
            id: 3,
            icon: "/services_logos/branding.png",
            alt: "branding_logo",
            title: "Branding & Design",
        },
        {
            id: 4,
            icon: "/services_logos/webdev.png",
            alt: "webdev_logo",
            title: "Web App",
        },
        {
            id: 5,
            icon: "/services_logos/mobiledev.png",
            alt: "mobiledev_logo",
            title: "Mobile App",
        },
        {
            id: 6,
            icon: "/services_logos/wordpress.png",
            alt: "wordpress_logo",
            title: "Wordpress Websites"  ,
        }

    ];

return (

<div className="container mb-12 w-full service-section flex flex-row flex-wrap justify-center relative bottom-2 sm:bottom-12 md:10/12 lg:w-9/12 xl:w-8/12 p-10" id="services">
    {myServices.map( service => (
        <Card className="flex-1 w-32 mx-2 my-2 basis-2/6 md:basis-1/4 align-center service-card max-w-[14rem] transition hover: delay:100 hover:-translate-y-2 cursor-pointer " key={service.id} variant="gradient" color="red">
            <CardBody className="flex flex-col">
                <Image className="self-center" src={service.icon} width={70} height={70} alt={service.alt} />
                <Typography variant="h4" className="mb-2 mt-5 text-center text-sm font-semi-bold">
                    {service.title}
                </Typography>
            </CardBody>
        </Card>

    ))}
</div>
);
}