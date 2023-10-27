'use client'

import Image from "next/image";
import { Typography, Chip } from "../../materialTailwindExports";

export default function Technologies() {

    const devToolsData = [
        {
            toolIcon: "/skills_logos/html.png",
            alt: "html_logo",
        },
        {
            toolIcon: "/skills_logos/css.png",
            alt: "css_logo",
        },
        {
            toolIcon: "/skills_logos/js.png",
            alt: "javascript_logo",
        },
        {
            toolIcon: "/skills_logos/react.png",
            alt: "react_logo",
        },
        {
            toolIcon: "/skills_logos/nodejs.png",
            alt: "nodejs_logo",
        },
        {
            toolIcon: "/skills_logos/expressjs.png",
            alt: "expressjs_logo",
        },
        {
            toolIcon: "/skills_logos/mongodb.png",
            alt: "mongodb_logo",
        },
        {
            toolIcon: "/skills_logos/github.png",
            alt: "github_logo",
        },
        {
            toolIcon: "/skills_logos/gitlab.png",
            alt: "gitlab_logo",
        },
        {
            toolIcon: "/skills_logos/asana.png",
            alt: "asana_logo",
        },
        {
            toolIcon: "/skills_logos/postman.png",
            alt: "postman_logo",
        },
        {
            toolIcon: "/skills_logos/tailwindcss.png",
            alt: "tailwindcss",
        },
        {
            toolIcon: "/skills_logos/materialui.png",
            alt: "materialui_logo",
        },
        {
            toolIcon: "/skills_logos/bootstrap.png",
            alt: "bootstrap_logo",
        },
        {
            toolIcon: "/skills_logos/reactnative.png",
            alt: "reactnative_logo",
        },
        {
            toolIcon: "/skills_logos/expo.png",
            alt: "expo_logo",
        },
        {
            toolIcon: "/skills_logos/figma.png",
            alt: "figma_logo",
        },
        {
            toolIcon: "/skills_logos/adobexd.png",
            alt: "adobexd_logo",
        },
        {
            toolIcon: "/skills_logos/wordpress.png",
            alt: "wordpress_logo",
        },
        {
            toolIcon: "/skills_logos/elementor.png",
            alt: "elementor_logo",
        },
    ]

return(
    <div className="container flex flex-col mx-auto pt-5 md:10/12 lg:w-9/12 xl:w-8/12">
        <Chip variant="gradient" value="Technologies" className="self-center mb-5 chip-background" />
        <Typography variant="paragraph" className="subtitle-text">
            The skills, tools and Technologies I have used throughout my whole web developer experience 
        </Typography>

        
            <div className="flex flex-row justify-center py-10 gap-10 flex-wrap">
                {devToolsData.map(({toolIcon, alt}) => (
                    <div>
                        <Image className="self-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:cursor-pointer duration-300 " src={toolIcon} width={50} height={50} alt={alt} />
                    </div> 
                ))}   
            </div>
            
    </div>
)
}