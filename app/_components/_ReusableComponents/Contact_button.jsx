import { useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Input, Textarea } from "../../materialTailwindExports";
import Link from "next/link";
import Image from "next/image";

export default function ContactButton () {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

return (
<div>
    <Button className="contact-button" onClick={handleOpen}>Contact</Button>
    <Dialog size="xs" open={open} handler={handleOpen} className="dialog shadow-none">
        <Card className="mx-auto w-full max-w-[24rem] bg-transparent p-2">
            <CardBody className="flex flex-col gap-4">
                <Link href="/" className="self-center">
                    <Image  src="/logo.png" width={70} height={70} alt='spex_logo' />
                </Link>
                <Typography className="mb-3 font-normal self-center" variant="paragraph" color="white">
                    Reach out to me !!
                </Typography>
                {/* <Input label="Email" size="md" color="white" className="bg-transparent" /> */}
                <Input variant="standard" className="textarea mb-3 placeholder-shown:border-gray-700 focus:border-gray-100" label="Fullname" />
                <Input variant="standard" className="textarea mb-3 placeholder-shown:border-gray-700 focus:border-gray-100" label="Email" />
                <Textarea variant="standard" label="Message" className="textarea placeholder-shown:border-gray-700 focus:border-gray-100" />
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" onClick={handleOpen} fullWidth className="contact-button">
                    Send
                </Button>
            </CardFooter>
        </Card>
    </Dialog>
</div>
)
}