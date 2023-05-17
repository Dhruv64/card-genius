import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { api } from '~/utils/api';
import { message, Button } from "antd"
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Input, Group, rem, Tooltip, Textarea, } from '@mantine/core';
import { CgWebsite } from "react-icons/cg";
import { BrandInstagram, BrandLinkedin, BrandTwitter, BrandWhatsapp, BrandYoutube, BrandFacebook, BrandGithub, Mail, Link, MapPin, Phone, FileDescription, BrandSnapchat, BrandTiktok, BrandPaypal, BrandCashapp, CalendarEvent, BrandDiscord, BrandTwitch, BrandTelegram, BrandSkype, BrandWechat, DeviceNintendo, AlertCircle } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import Createnav from '~/components/createnav';
import BadgeCard from '~/components/previewCard';
import Head from 'next/head';
// Selectors Part-1 Start


const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: rem(90),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.05)',
        },
    },
}));
// Selectors Part-1 END




type FormValues = {
    imgUrl: string
    logoUrl: string
    name: string
    title: string
    department: string
    company: string
    phone: string
    email: string
    address: string
    websitelink: string
    link: string
    github: string
    twitter: string
    instagram: string
    linkedin: string
    facebook: string
    youtube: string
    whatsapp: string
}


const New = () => {
    const router = useRouter()
    const { mutate, isLoading: isCreating, data } = api.cards.createCard.useMutation({
        onSuccess: () => {
            message.success('Card Created!')
            router.push(`/app/`)
            console.log(data)
        },
        onError: (e) => {
            const errorMessage = e.data?.zodError?.fieldErrors.content;
            if (errorMessage && errorMessage[0]) {
                message.error(errorMessage[0]);
            } else {
                message.error("Failed to create! Please try again later.");
            }
        }

    });
    const form = useForm<FormValues>()
    const { register, watch, handleSubmit, formState } = form;

    const watchimgUrl = watch("imgUrl")
    const watchlogoUrl = watch("logoUrl")
    const watchname = watch("name")
    const watchtitle = watch("title")
    const watchcompany = watch("company")
    const watchphone = watch("phone")
    const watchemail = watch("email")
    const watchaddress = watch("address")
    const watchwebsitelink = watch("websitelink")
    const watchlink = watch("link")
    const watchgithub = watch("github")
    const watchtwitter = watch("twitter")
    const watchinstagram = watch("instagram")
    const watchlinkedin = watch("linkedin")
    const watchfacebook = watch("facebook")
    const watchyoutube = watch("youtube")
    const watchwhatsapp = watch("whatsapp")

    const { errors } = formState;


    const onSubmit = (data: FormValues) => {
        mutate(data)
    }

    const [addPhone, setAddPhone] = useState(false)
    const [addEmail, setAddEmail] = useState(false)
    const [addAddress, setAddAddress] = useState(false)
    const [addWebsite, setAddWebsite] = useState(false)
    const [addLink, setAddLink] = useState(false)
    const [addGithub, setAddGithub] = useState(false)
    const [addTwitter, setAddTwitter] = useState(false)
    const [addInstagram, setAddInstagram] = useState(false)
    const [addLinkedIn, setAddLinkedIn] = useState(false)
    const [addFacebook, setAddFacebook] = useState(false)
    const [addYoutube, setAddYoutube] = useState(false)
    const [addWhatsapp, setAddWhatsapp] = useState(false)

    const mockdata = [
        { title: 'Phone', icon: Phone, color: 'violet' },
        { title: 'Email', icon: Mail, color: 'orange' },
        { title: 'Address', icon: MapPin, color: 'blue' },
        { title: 'Website', icon: CgWebsite, color: 'yellow' },
        { title: 'Link', icon: Link, color: 'green' },
        { title: 'Github', icon: BrandGithub, color: 'pink' },
        { title: 'Twitter', icon: BrandTwitter, color: 'blue' },
        { title: 'Instagram', icon: BrandInstagram, color: 'pink' },
        { title: 'LinkedIn', icon: BrandLinkedin, color: 'blue' },
        { title: 'Facebook', icon: BrandFacebook, color: 'blue' },
        { title: 'Youtube', icon: BrandYoutube, color: 'red' },
        { title: 'Whatsapp', icon: BrandWhatsapp, color: 'green' },
    ];



    const handleClick = (param: String) => {
        if (param == 'Phone') {
            { (() => setAddPhone(!addPhone))() }
        } if (param == 'Email') {
            { (() => setAddEmail(!addEmail))() }
        } if (param == 'Address') {
            { (() => setAddAddress(!addAddress))() }
        } if (param == 'Website') {
            { (() => setAddWebsite(!addWebsite))() }
        } if (param == 'Link') {
            { (() => setAddLink(!addLink))() }
        } if (param == 'Github') {
            { (() => setAddGithub(!addGithub))() }
        } if (param == 'Twitter') {
            { (() => setAddTwitter(!addTwitter))() }
        } if (param == 'Instagram') {
            { (() => setAddInstagram(!addInstagram))() }
        } if (param == 'LinkedIn') {
            { (() => setAddLinkedIn(!addLinkedIn))() }
        } if (param == 'Facebook') {
            { (() => setAddFacebook(!addFacebook))() }
        } if (param == 'Youtube') {
            { (() => setAddYoutube(!addYoutube))() }
        } if (param == 'Whatsapp') {
            { (() => setAddWhatsapp(!addWhatsapp))() }
        }
    }


    // Selectors Part-2 START
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} onClick={() => handleClick(item.title)} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));
    // Selectors Part-2 END

    return (

        <div >
            <Head>
                <title>Create Card</title>
            </Head>
            <Createnav />
            <div className='lg:flex lg:justify-center lg:mt-10 mt-5'>
                <div className='text-center lg:w-1/3 w-full' >
                    <div className='border border-solid p-5 rounded lg:mx-10'>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className='space-y-2' >
                                <div >
                                    <label className='font-semibold flex mb-1' htmlFor="company">Cover Image URL</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="company" {...register("imgUrl")} />

                                </div>
                                <div >
                                    <label className='font-semibold flex mb-1' htmlFor="company">Logo URL</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="company" {...register("logoUrl")} />

                                </div>
                                <div className=''>
                                    <label className='font-semibold flex mb-1' htmlFor="firstname">Name <span className='ml-1 text-red-600'>*</span></label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="name" {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }

                                    })} />
                                    <p className='text-red-600 text-[12px] text-left'>{errors.name?.message}</p>
                                </div>


                                <div className='flex-col'>
                                    <label className='font-semibold flex mb-1' htmlFor="title">Title</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug  resize-none' id="title" {...register("title")} />

                                </div>

                                <div >
                                    <label className='font-semibold flex mb-1' htmlFor="company">Company</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="company" {...register("company")} />

                                </div>

                                {/* Fields */}

                                <div className={`${addPhone ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="phone">Phone</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="phone" {...register("phone")} />

                                </div>
                                <div className={`${addEmail ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="email">Email</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="email" id="email" {...register("email")} />

                                </div>
                                <div className={`${addAddress ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="address">Address</label>
                                    <Textarea className='block w-[95%] py-1 text-sm leading-snug  resize-none' type="text" id="address" {...register("address")} />

                                </div>
                                <div className={`${addWebsite ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="websitelink">Website</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="websitelink" {...register("websitelink")} />

                                </div>
                                <div className={`${addLink ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="link">Link</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="link" {...register("link")} />

                                </div>
                                <div className={`${addGithub ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="github">Github</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="github" {...register("github")}
                                        rightSection={
                                            <Tooltip label="Enter your Github username" position="top-end" withArrow>
                                                <div>
                                                    <AlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                                </div>
                                            </Tooltip>} />

                                </div>
                                <div className={`${addTwitter ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="twitter">Twitter</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="twitter" {...register("twitter")}
                                        rightSection={
                                            <Tooltip label="Enter your twitter username" position="top-end" withArrow>
                                                <div>
                                                    <AlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                                </div>
                                            </Tooltip>}
                                    />

                                </div>
                                <div className={`${addInstagram ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="instagram">Instagram</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="instagram" {...register("instagram")}
                                        rightSection={
                                            <Tooltip label="Enter your instagram username" position="top-end" withArrow>
                                                <div>
                                                    <AlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                                </div>
                                            </Tooltip>} />

                                </div>
                                <div className={`${addLinkedIn ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="linkedlink">LinkedIn</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="linkedlink" {...register("linkedin")}
                                        rightSection={
                                            <Tooltip label="Enter your LinkedIn username" position="top-end" withArrow>
                                                <div>
                                                    <AlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                                </div>
                                            </Tooltip>} />

                                </div>
                                <div className={`${addFacebook ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="facebook">Facebook</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="facebook" {...register("facebook")} />

                                </div>
                                <div className={`${addYoutube ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="youtube">Youtube</label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="youtube" {...register("youtube")} />

                                </div>
                                <div className={`${addWhatsapp ? 'block' : 'hidden'}`} >
                                    <label className='font-semibold flex mb-1' htmlFor="whatsapp">Whatsapp<span className='font-normal ml-1'> (with country code)</span></label>
                                    <Input className='block w-[95%] py-1 text-sm leading-snug ' type="text" id="whatsapp" {...register("whatsapp")}
                                        rightSection={
                                            <Tooltip label="Enter with country code for example 91XXXXXXXXXX" position="top-end" withArrow>
                                                <div>
                                                    <AlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                                </div>
                                            </Tooltip>} />

                                </div>

                            </div>


                            <div className='py-3'>
                                <Button htmlType='submit' type='primary' loading={isCreating} className="text-white font-bold x-4 rounded">
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* <DevTool control={control} /> */}
                </div >

                {/* Selectors Part-3 START */}

                <div className='lg:w-1/4 lg:mr-8 lg:pt-0  pt-10 '>
                    <Card withBorder radius="md" className={classes.card}>
                        <Group position="apart">
                            <Text className={classes.title}>Add/remove fields</Text>
                        </Group>
                        <SimpleGrid cols={3} mt="md">
                            {items}
                        </SimpleGrid>
                    </Card>
                </div>
                <div className='lg:w-1/3 w-[90%] mx-auto lg:mx-0 mt-6 lg:mt-0' >
                    <span className='font-bold'>Preview:</span>
                    <BadgeCard image={watchimgUrl} name={watchname} title={watchtitle} logo={watchlogoUrl} company={watchcompany} color={null} phone={watchphone} email={watchemail} address={watchaddress} websitelink={watchwebsitelink} link={watchlink} github={watchgithub} twitter={watchtwitter} instagram={watchinstagram} linkedin={watchlinkedin} facebook={watchfacebook} youtube={watchyoutube} whatsapp={watchwhatsapp} />
                </div>
            </div >
        </div>
    )
}

export default New
