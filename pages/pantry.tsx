import Layout from "../components/layout";
import Head from "next/head";
import { Stack, Heading, Text, Flex, Tooltip } from "@chakra-ui/react"
import Dashboard from "../components/dashboard";
import Menu from "../components/menu";
import {useEffect, useState} from "react";

export default function Pantry() {
    const [ data, setData ] = useState([]);
    const [ retry, setRetry] = useState(false);
    const [ error, setError] = useState(false);
    
    useEffect(()=>{
        fetch('http://localhost:3001/pantry')
          .then(res => res.json())
          .then(data => {setData(data)})
          .catch(() => setError(true))
    }, [retry]);
    
    return (
        <Layout path={'pantry'}>
            <Head>
                <title>Foodmies - Despensa</title>
            </Head>
            <Stack as={'main'} spacing={6} fontFamily={'Inter'} mb={'16'}>
                <Flex justifyContent={'space-between'}>
                    <Heading as={'h1'} fontWeight={'semibold'} letterSpacing={'-0.03em'} fontFamily={'inherit'}>Tu despensa</Heading>
                    <Menu name={'Alfonso Amaya'} avatar={''}/>
                </Flex>
                <Flex flexDir={'column'} gap={3}>
                    <Heading as={'h3'} size={'md'} fontWeight={'semibold'} fontFamily={'inherit'}>En casa</Heading>
                    <Text lineHeight={'150%'} letterSpacing={'-0.005em'}>
                        Esta es la despensa general de las cosas, toma en cuenta que estas <Tooltip label={'Al estar bajo un plan compartido tu despensa es colectiva'} hasArrow placement={'top'}><span className="tooltip">compartiendo un hogar</span></Tooltip> por lo que es posible que algunos insumos se vean reducidos aún si tu no los has apartado para consumo.
                    </Text>
                </Flex>
                <Dashboard data={data}/>
                <Flex flexDir={'column'} gap={3}>
                    <Heading as={'h3'} size={'md'} fontWeight={'semibold'} fontFamily={'inherit'}>Falta comprar</Heading>
                    <Text lineHeight={'150%'} letterSpacing={'-0.005em'}>
                        Insumos cuya fecha de expiración ya pasó y requieren ser comprados de nuevo
                    </Text>
                </Flex>
                <Dashboard data={data}/>
            </Stack>
        </Layout>
    );
}