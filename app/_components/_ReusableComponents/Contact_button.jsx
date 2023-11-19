'use client'

import { useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Input, Textarea } from "../../materialTailwindExports";
import Link from "next/link";
import Image from "next/image";
import { sendContactForm } from "@/app/lib/api";
import { useForm } from "react-hook-form";


    const initValues = { fullName: "", email: "", subject: "", message: "" };
    const initStates = { values: initValues };

export default function ContactButton () {

    const { register, handleSubmit, formState:{errors} } = useForm({ initValues });
    console.log(errors)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    function onSubmit(data) {
        sendContactForm(data);
    }

    // const [formData, setFormData ] = useState(initStates);
    // const { values, isLoading } = formData;

    // const handleChange = ({ target }) => setFormData((prev) => ({
    //     ...prev,
    //     values: {
    //         ...prev.values,
    //         [target.name]: target.value,
    //     }
    // }))

    // const onSubmit = async () => {
    //     await sendContactForm(values)
    // } 


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('/api/contact', {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 Accept: "application/json"
    //             },
    //         });

    //         if (response.ok){
    //             console.log('Email sent successfully !!');
    //         } else {
    //             console.error('Error sending Email');
    //         }
    //     } catch (error) {
    //         console.error('Error', error)       
    //     }
    // }

return (
<div>
    <Button className="contact-button" onClick={handleOpen}>Contact</Button>
    <Dialog size="xs" open={open} handler={handleOpen} className="dialog shadow-none">
        <form method="post" onSubmit={handleSubmit(onSubmit)}>    
            <Card className="mx-auto w-full max-w-[24rem] bg-transparent p-2">
                <CardBody className="flex flex-col gap-4">
                    <Link href="/" className="self-center">
                        <Image  src="/logo.png" width={70} height={70} alt='spex_logo' />
                    </Link>
                    <Typography className="mb-3 font-normal self-center" variant="paragraph" color="white">
                        Reach out to me !!
                    </Typography>

                    {/* Fullname registration: */}
                    <Input { ...register("fullName", {required:"required*"})} variant="standard" className="textarea mb-3 placeholder-shown:border-gray-700 focus:border-gray-100" label="Fullname"/>
                    <Typography variant="small" className="-mt-4 text-red-400">{errors.fullName?.message}</Typography>
                    {/* Email registration: */}
                    <Input { ...register("email", {required:"required*"})} variant="standard" className="textarea mb-3 placeholder-shown:border-gray-700 focus:border-gray-100" label="Email" />
                    <Typography variant="small" className="-mt-4 text-red-400">{errors.email?.message}</Typography>
                    {/* Subject registration: */}
                    <Input { ...register("subject", {required:"required*"})} variant="standard" className="textarea mb-3 placeholder-shown:border-gray-700 focus:border-gray-100" label="Subject"/>
                    <Typography variant="small" className="-mt-4 text-red-400">{errors.subject?.message}</Typography>
                    {/* Textarea message registration: */}
                    <Textarea { ...register("message", {required:"required*"})} variant="standard" label="Message" className="textarea placeholder-shown:border-gray-700 focus:border-gray-100" />
                    <Typography variant="small" className="-mt-6 text-red-400">{errors.message?.message}</Typography>

                </CardBody>
                <CardFooter className="pt-0">
                    <Button 
                        variant="gradient" 
                        type="submit"  
                        fullWidth 
                        className="contact-button"
                        // disabled={!values.fullName || !values.email || !values.subject|| !values.message } 
                        >
                        Send
                    </Button>
                </CardFooter>
            </Card>
        </form>    
    </Dialog>
</div>
)
}