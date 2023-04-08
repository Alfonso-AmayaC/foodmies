import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoMdImage } from "react-icons/io"
import Image from "next/image";
import { pantryItem } from "../types";
import { useContext } from "react"
import { PantryContext } from "./PantryContext";

export function PantryItem({ data, onClick } : { data: pantryItem, onClick?: any}) {
    const { name, qty } = data;
    const { selected } = useContext( PantryContext )
    const isSelected = data.name === selected.name;

    return (
        <Flex justifyContent={'space-between'} px={'4'} py={'4'} className={isSelected ? 'active' : ''} _hover={{bg: "#abd3f0", cursor: 'pointer'}} onClick={onClick}>
            <Flex alignItems={'center'} gap={2}>
                {
                name ? 
                <Image src={`/static/${name}.svg`} alt={`Imagen de un ${name.toLowerCase()}`} width={'30'} height={'30'} style={{display: 'block'}}/>
                :
                <Icon as={IoMdImage} boxSize={7}/>
                }
                <p>{name}</p>
            </Flex>
            <Flex gap={3} alignItems={'center'}>      
                <Box>{qty} pzs</Box>
            </Flex>
        </Flex>
    );
}


