import { Flex, Box, Input, FormLabel, FormControl, Heading, Stack, Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const ready:boolean = name.length != 0 && password.length != 0 ? true : false; 

    return (
        <Flex w={'100%'} h={'100%'} bg={'#FFFFFF'} justifyContent={'center'} alignItems={'center'}>
            <Box w={{base: "80%", sm:"80%", md:"25%"}} bg={'#BFE4FF'} px={'16'} py={'12'} rounded={'10px'} boxShadow={'lg'}>
                <Stack spacing={6}>
                    <Heading as={'h1'} fontFamily={'Permanent Marker'} textAlign={'center'}>Foodmies</Heading>
                    <FormControl>
                        <FormLabel htmlFor="name" color={'gray.600'}>Usuario</FormLabel>
                        <Input id="name" variant={'flushed'} type={'text'} placeholder={'Guayaya0108'} borderBottom={'2px'} borderColor={'gray.400'} value={name} onChange={handleName}/>
                        <FormLabel htmlFor="password" color={'gray.600'} mt={'6'}>Contraseña</FormLabel>
                        <Input id="password" variant={'flushed'} type={'password'} placeholder={'****'} borderBottom={'2px'} borderColor={'gray.400'} value={password} onChange={handlePassword}/>
                    </FormControl>
                    <Flex justifyContent={'center'}>
                        {ready ? (
                            <Link href={'/pantry'}>
                                <Button variant={'outline'} colorScheme={'blue'}>Iniciar sesión</Button>
                            </Link>
                        ) : ""}
                    </Flex>
                </Stack>
            </Box>
        </Flex>
    )
}