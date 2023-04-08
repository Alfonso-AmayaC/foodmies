import { Flex, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ghost from "../public/static/ghost.svg";

export default function NotFound({ messageText, buttonText, route} : NotFound) {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} h={'100%'} flexDirection={'column'} gap={6}>
            <Image src={ghost} alt={'Working...'}/>
            <Heading as={'h2'} fontFamily={'Inter'} fontSize={'2xl'} w={'50%'} textAlign={'center'}>
                {messageText}
            </Heading>
            <Link href={`/${route}`}>
                <Button colorScheme={'blue'} variant={'ghost'} title={'Regresar a mi despensa'}>
                    {buttonText}
                </Button>
            </Link>
        </Flex>
    );
}

type NotFound = {
    messageText: string,
    buttonText: string,
    route: string
}