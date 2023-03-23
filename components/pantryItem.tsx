import { Box, Flex, Icon } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IoMdImage } from "react-icons/io"
import Image from "next/image";
 
type PantryItem = {
    name: string,
    qty: number | string,
    icon?: any
}

export default function PantryItem({ name, qty, icon } : PantryItem) {
    return (
        <Flex justifyContent={'space-between'} px={'4'} py={'4'} _hover={{bg: "#91CAF2"}}>
            <Flex alignItems={'center'} gap={2}>
                {
                icon ? 
                <Image src={`/${icon || name}.svg`} alt={`Imagen de un ${name.toLowerCase()}`} width={'30'} height={'30'} style={{display: 'block'}}/>
                :
                <Icon as={IoMdImage} boxSize={7}/>
                }
                <p>{name}</p>
            </Flex>
            <Flex gap={3} alignItems={'center'}>
                <MinusIcon /> 
                <Box>{qty}</Box>
                <AddIcon />
            </Flex>
        </Flex>
    );
}