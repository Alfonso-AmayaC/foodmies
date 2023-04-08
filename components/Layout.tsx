import { Flex, Grid, GridItem, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { IoBagHandle, IoCalendar, IoStatsChart } from 'react-icons/io5'
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
            <Grid h={'100vh'} templateRows={'repeat(2, 1fr)'} templateColumns={{ base: '1', md: 'repeat(8, 1fr)', lg: 'repeat(6, 1fr)' }} position={'relative'}>
                <GridItem rowSpan={2} colSpan={{ base: 0, md: 2, lg: 1 }} bg={'#BFE4FF'} roundedBottomRight={'10px'} roundedTopRight={'10px'} zIndex={'modal'} roundedRight={'20px'} borderRight={'9px solid #E2E8F0'} display={{ base: 'none', md:'initial' }}>
                <Stack direction={'column'} gap={10} pt={'10'}>
                    <Link href={'/pantry'} className={'menuLogo'}>
                        <Heading as={'h2'} fontFamily={'Permanent Marker'} textAlign={'center'}>Foodmies</Heading>
                    </Link>
                    <Stack>
                        <Link href={'/pantry'} className={`menuItem ${path === 'pantry' ? 'active' : ''}`}>
                            <Flex width={'80%'} ml={'10%'} alignItems={'center'} gap={'0.4em'}>
                                <Icon as={IoBagHandle} color={'#3182CE'} boxSize={'5'}/>
                                <Text fontSize={'1em'} fontWeight={'500'}>Pantry</Text>
                            </Flex>
                        </Link>
                        <Link href={'/meals'} className={`menuItem ${path === 'meals' ? 'active' : ''}`}>
                            <Flex width={'80%'} ml={'10%'} alignItems={'center'} gap={'0.4em'}>
                                <Icon as={IoCalendar} color={'#3182CE'} boxSize={'5'}/>
                                <Text fontSize={'1em'} fontWeight={'500'}>Planned meals</Text>
                            </Flex>
                        </Link>
                        <Link href={'/history'} className={`menuItem ${path === 'history' ? 'active' : ''}`}>
                            <Flex width={'85%'} ml={'10%'} alignItems={'center'} gap={'0.4em'}>
                                <Icon as={IoStatsChart} color={'#3182CE'} boxSize={'5'}/>
                                <Text fontSize={'1em'} fontWeight={'500'}>Price history</Text>
                            </Flex>                            
                        </Link>
                    </Stack>
                </Stack>
                </GridItem>
                <GridItem rowSpan={2} colSpan={{ base: 1, md: 6, lg: 5 }} bg='#FFFFFF' pt={'10'} px={{ base: '8', md: '10' }} fontFamily={'inter'} overflowY={'scroll'}>
                    {children}
                </GridItem>
            </Grid>
        </>
    )
}