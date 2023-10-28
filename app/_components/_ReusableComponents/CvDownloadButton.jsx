import Link from "next/link";
import { Button } from "../../materialTailwindExports"

export default function CvDownloadButton() {
    return (
        <div className="w-full py-4">
            <Link href="/curriculum_vitae/nasseur_islam.pdf" download="CV_islamnasseur" target="_blank">
                <Button className="contact-button">Download CV</Button>
            </Link>
        </div>
    )
}