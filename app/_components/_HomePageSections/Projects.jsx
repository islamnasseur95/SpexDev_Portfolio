'use client'

import Link from "next/link";
import Image from "next/image";
import { 
        Typography, 
        Tabs,
        TabsHeader,
        TabsBody,
        Tab,
        TabPanel,
        Card,
        CardHeader,
        CardBody,
        Avatar,
        Chip } from "../../materialTailwindExports"

export default function Projects() {

    const data = [
        {
          label: "Front-end",
          value: "frontend",
          projects: [{
            name: "Spex Dev",
            type: "Portfolio",
            technology: "React - NextJS",
            url: "/",
            logo: "/logo.png",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-red-900 transition"
        }
    ]
        },
        {
          label: "Mobile-dev",
          value: "mobiledev",
          projects: [{
            name: "Spex Dev",
            type: "Management app",
            technology: "ReactNative",
            url: "/",
            logo: "/logo.png",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        }
    ]
        },
     
        {
          label: "MERN",
          value: "mern",
          projects: [{
            name: "Lucerna",
            type: "E-commerce",
            technology: "Full-Javascript",
            url: "https://lucernacreation.com/",
            logo: "",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        },
        {
            name: "SneakerSouk",
            type: "E-commerce",
            technology: "Full-javascript",
            url: "",
            logo: "",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        },
        {
            name: "L.C.A",
            type: "E-commerce",
            technology: "Full-javascript",
            url: "",
            logo: "",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        }
    ]
        },
     
        {
          label: "UX/UI",
          value: "uxui",
          projects: [{
            name: "Lucerna",
            type: "E-commerce",
            technology: "Figma",
            url: "https://lucernacreation.com/",
            logo: "",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        },
        {
            name: "SneakerSouk",
            type: "E-commerce",
            technology: "Adobe XD",
            url: "",
            logo: "",
            background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
            hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
        }
    ]
        },
     
        {
          label: "CMS",
          value: "cms",
          projects: [{
                name: "Lucerna",
                type: "E-commerce",
                technology: "Wordpress",
                url: "https://lucernacreation.com/",
                logo: "/projects_logos/logo-lucerna.png",
                image_alt: "Lucerna logo",
                background: "bg-[url('/projects_backgrounds/lucerna-background.jpg')]",
                hover_effect_color: "hover:shadow-md hover:shadow-indigo-500 transition"
            },
            {
                name: "SneakerSouk",
                type: "E-commerce",
                technology: "Wordpress",
                url: "https://sneakersouk.com/",
                logo: "/projects_logos/logo-sneakersouk.png",
                image_alt: "sneakersouk logo",
                background: "bg-[url('/projects_backgrounds/sneakersouk-background.jpg')]",
                hover_effect_color: "hover:shadow-md hover:shadow-white transition"
            },
            {
                name: "L.C.A",
                type: "E-commerce",
                technology: "Wordpress",
                url: "https://lescorsairesassocies.com/",
                logo: "/projects_logos/lca-logo.png",
                image_alt: "Lucerna logo",
                background: "bg-[url('/projects_backgrounds/lca-background.jpg')]",
                hover_effect_color: "hover:shadow-md hover:shadow-teal-500 transition"
            },
            {
                name: "UpgradeCC",
                type: "Catalogue",
                technology: "Wordpress",
                url: "https://upgradecc.com/",
                logo: "/projects_logos/logo-upgradcc-reversed.png",
                image_alt: "Lucerna logo",
                background: "bg-[url('/projects_backgrounds/upgradecc-background.png')]",
                hover_effect_color: "hover:shadow-md hover:shadow-orange-900 transition"
            },
            {
                name: "Kynirkit",
                type: "Catalogue",
                technology: "Wordpress",
                url: "https://kynirkitemporio.com/",
                logo: "/projects_logos/kynirkit-logo.png",
                image_alt: "Lucerna logo",
                background: "bg-[url('/projects_backgrounds/kynirkit-background.jpg')]",
                hover_effect_color: "hover:shadow-md hover:shadow-green-200 transition"
            }
        ]
        },
      ];
      
    return (
        <div className="container w-full md:10/12 lg:w-9/12 xl:w-8/12 flex flex-col justify-center my-12 mx-auto" id="myprojects">
            <Chip variant="gradient" value="My latest projects" className="self-center mb-5 chip-background" />
            <Typography variant="paragraph" className="subtitle-text">
                Explore a curated collection of my recent web development endeavors, showcasing a blend of creativity, functionality, and seamless user experiences.
            </Typography>

            <Tabs id="custom-animation" value="html" className="mt-11">
                <TabsHeader className="bg-transparent flex-wrap justify-center gap-3">
                    {data.map(({ label, value }) => (
                    <Tab key={value} value={value} color="white" className="w-36 language-tab bg-red mx-1">
                        {label}
                    </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                    }}
                >
                    {data.map((item , index) => (
                    <TabPanel key={index} value={item.value} className="flex flex-row justify-center xl:justify-start flex-wrap">
                        {/* {desc} */}
                        {item.projects.map((project, i) => (
                            
                                <Card 
                                key={i}
                                shadow={false}
                                className={"relative grid h-[18rem] w-full max-w-[15rem] items-end justify-center overflow-hidden text-center flex-1 basis-1/2 md:basis-1/3 mx-5 my-2 " + project.hover_effect_color }
                                >
                                <Link href={project.url}>
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className={"absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center " + project.background } //make spaces between the plus (+) so that all the classes work.
                                >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/80" />
                                    <Image src={project.logo} width={100} height={100} alt={project.image_alt} className="mx-auto pt-2 w-50 place-center project-logo"/>
                                </CardHeader>
                                <CardBody className="relative px-6 md:px-12">
                                    <Typography
                                        variant="h5"
                                        color="white"
                                        className="mb-6 font-medium leading-[1.5]"
                                    >
                                        {project.name}
                                    </Typography>
                                    <Typography variant="h6" className="text-gray-400">
                                        {project.type}
                                    </Typography>
                                    <Typography variant="h6" className="mb-4 text-gray-400">
                                        {project.technology}
                                    </Typography>
                                    <Avatar
                                        size="md"
                                        variant="circular"
                                        alt="Islam Nasseur"
                                        className="border-2 border-orange-400"
                                        src="/islamnasseur.png"
                                    />
                                </CardBody>
                                </Link>
                            </Card>
                        
                        ))}
                    </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}