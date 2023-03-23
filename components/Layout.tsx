import { Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, path }) {
    
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.png' />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid h={'100vh'} templateRows={'repeat(2, 1fr)'} templateColumns={'repeat(6, 1fr)'} position={'relative'}>
                <GridItem rowSpan={2} colSpan={1} bg={'#BFE4FF'} roundedBottomRight={'10px'} roundedTopRight={'10px'} zIndex={'modal'} roundedRight={'20px'} borderRight={'9px solid #E2E8F0'}>
                <Stack direction={'column'} gap={10} pt={'10'}>
                    <Link href={'/pantry'} className={'menuLogo'}>
                        <Heading as={'h2'} fontFamily={'Permanent Marker'} textAlign={'center'}>Foodmies</Heading>
                    </Link>
                    <Stack>
                        <Link href={'/pantry'} className={`menuItem ${path === 'pantry' ? 'active' : ''}`}>Despensa</Link>
                        <Link href={'/meals'} className={`menuItem ${path === 'meals' ? 'active' : ''}`}>Comidas planeadas</Link>
                        <Link href={'/history'} className={`menuItem ${path === 'history' ? 'active' : ''}`}>Histórico de precios</Link>
                    </Stack>
                </Stack>
                </GridItem>
                <GridItem rowSpan={2} colSpan={5} bg='#FFFFFF' pt={'10'} px={'14'} fontFamily={'inter'} overflowY={'scroll'}>
                    {children}
                </GridItem>
            </Grid>
        </>
    )
}