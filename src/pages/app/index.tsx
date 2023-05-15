import React from 'react'
import { useSession } from 'next-auth/react';
import Topnav from '~/components/topnav';
import Head from 'next/head';
import { api } from "~/utils/api";
import NotFound404 from "~/components/404";
import { createStyles, SimpleGrid, Card, Image, Text, Container, Menu, ActionIcon, Group } from '@mantine/core';
import { DotsVertical, Pencil, Trash } from "tabler-icons-react"
import Link from 'next/link';




const index = () => {
  const { data } = api.cards.getCardsByUserId.useQuery()
  // console.log(data)
  const { data: session } = useSession();

  if (!session) {
    setTimeout(() => { return <NotFound404 /> }, 2000)
  }


  const useStyles = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      boxShadow: theme.shadows.md,
      height: 230,
      width: 220,
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: theme.shadows.md,

      },
    },
    createCard: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      boxShadow: theme.shadows.md,
      height: 230,
      width: 220,
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: theme.shadows.md,

      },
      backgroundColor: '#e1e9f5'
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 500,
    },
  }));

  const { classes } = useStyles();

  const cards = data?.map((item) => (

    <>
      <Link href={`app/share/${item.id}`} className='no-underline'>
        <Card key={item.name} p={'xs'} radius="md" component="a" className={`relative ${classes.card}`} >


          <Image src={item.imgUrl} width={200} height={180} />

          <Group position="apart">
            <Text className={`w-[200px] truncate overflow-hidden  ${classes.title}`} mt={5}>
              {item.name}
            </Text>
          </Group>
        </Card>
      </Link>
    </>
  ));

  return (

    <div className='bg-blue-200 h-[100vh]'>
      <Head>
        <title>
          Your Cards
        </title>
      </Head>

      <Topnav />

      {(() => {
        if (!session) {
          return null
        } else return (
          <Container className='' py="xl">
            <div className='ml-20 lg:ml-0'>
              <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1, }]}>
                <Card p={'xs'} radius="md" component="a" href='/app/new' className={`border-dashed border text-center ${classes.createCard}`} >
                  <span className='text-9xl font-thin'>+</span><br></br>
                  <span className='font-light pt-10'>Create a card</span>
                </Card>
                {cards}
              </SimpleGrid>
            </div>
          </Container>

        )
      })()}


    </div>
  )
}

export default index
