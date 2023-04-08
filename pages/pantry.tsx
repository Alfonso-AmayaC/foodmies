import Layout from "../components/Layout";
import Head from "next/head";
import { Stack, Heading, Text, Flex, Tooltip } from "@chakra-ui/react"
import Dashboard from "../components/dashboard";
import Menu from "../components/Menu";
import { PantryProvider } from "../components/PantryContext";

export default function Pantry() {
    return (
        <Layout path={'pantry'}>
            <Head>
                <title>Foodmies - Pantry</title>
            </Head>
            <Stack as={'main'} spacing={6} fontFamily={'Inter'} mb={'16'}>
                <Flex justifyContent={'space-between'}>
                    <Heading as={'h1'} fontWeight={'semibold'} letterSpacing={'-0.03em'} fontFamily={'inherit'}>Your pantry</Heading>
                    <Menu name={'Alfonso Amaya'} avatar={''}/>
                </Flex>
                <Flex flexDir={'column'} gap={3}>
                    <Heading as={'h3'} size={'md'} fontWeight={'semibold'} fontFamily={'inherit'}>At home</Heading>
                    <Text lineHeight={'150%'} letterSpacing={'-0.005em'}>
                        This is the general pantry of things, keep in mind that you are <Tooltip label={'Under a shared plan, your pantry is collective'} hasArrow placement={'top'}><span className="tooltip">sharing a household</span></Tooltip> so it is possible that some supplies may be reduced even if you have not set them aside for consumption.                          
                    </Text>
                </Flex>
                <PantryProvider>
                    <Dashboard/>
                </PantryProvider>
                <Flex flexDir={'column'} gap={3}>
                    <Heading as={'h3'} size={'md'} fontWeight={'semibold'} fontFamily={'inherit'}>Missing to buy</Heading>
                    <Text lineHeight={'150%'} letterSpacing={'-0.005em'}>
                        Supplies whose expiration date has passed and need to be re-purchased
                    </Text>
                </Flex>
            </Stack>
        </Layout>
    );
}