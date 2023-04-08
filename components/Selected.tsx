import { metadata, pantryItem } from "../types";
import { Heading, FormControl, FormLabel, Input, Flex, Box, Button, useToast } from '@chakra-ui/react';
import { useState, useContext, useEffect } from "react";
import { PantryContext } from "./PantryContext";
import { updateData } from "../lib/services";
import deepcopy from "deepcopy";

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const Selected = ({ pantryItem, metadata } : { pantryItem: pantryItem, metadata? : metadata }) => {
    const toast = useToast();
    const { data, setData } = useContext( PantryContext );
    const [qty, setQty] = useState(pantryItem.qty);
    const [canUpdate, setUpdate] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleQty = (e:any) => {
        setQty(e.target.value);
    }

    const handleUpdate = () => {
        const newData = deepcopy(data);
        const updatedItemIndex = newData[metadata.tab].findIndex(item => item.name === pantryItem.name);
        newData[metadata.tab][updatedItemIndex] = {
            ...newData[metadata.tab][updatedItemIndex],
            qty: qty
        }
        setData(newData);
        const dataForSending = newData[metadata.tab][updatedItemIndex];
        
        setLoading(!isLoading);
        updateData(`/pantry/${metadata.tab}`, dataForSending)
        .then(() => {
            toast({
                title: 'Pantry item updated',
                description: "Successfully updated the item",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })
            setLoading(false);
            setUpdate(false);
        })
        .catch((err)=> {alert(`F, my bro: ${JSON.stringify(err.message, null,2)}`)})
        
    }

    useEffect(()=>{
        const decision = data[metadata.tab].find(item => item.name === pantryItem.name).qty != qty;
        setUpdate(decision);
    }, [qty])

    const parsedDate = new Date(pantryItem.bought);
    const today = new Date();
    const formattedDate = `${weekDays[parsedDate.getDay()]} ${parsedDate.getDate()} ${months[parsedDate.getMonth()]}`;
    const usedByNames = pantryItem.usedBy.users.map(user => user.name);

    return (
        <>  
            <Flex justifyContent={'space-between'}>
                <Heading as={'h3'} size={'md'}>
                    {pantryItem.name}
                </Heading>
                <Button colorScheme={'blue'} variant={'solid'} size={'sm'} isDisabled={!canUpdate} isLoading={isLoading} onClick={handleUpdate}>
                    Update
                </Button>
            </Flex>
            
            <FormControl>
                <Flex flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
                    <Box width={'50%'}>
                        <FormLabel htmlFor="bought">Bought</FormLabel>
                        <Input id="bought" type={'text'} isReadOnly={true} variant={'flushed'} placeholder={formattedDate}/>
                    </Box>
                    <Box width={'50%'}>
                        <FormLabel htmlFor="lifespan">Expires in (days)</FormLabel>
                        <Input id="lifespan" type={'number'} isReadOnly={true} variant={'flushed'} colorScheme={'messenger'} placeholder={(pantryItem.lifespan + parsedDate.getDate() - today.getDate()).toString()}/>
                    </Box>
                </Flex>
                <Flex flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'center'} mt={5}>
                    <Box width={'50%'}>
                        <FormLabel htmlFor="qty">Quantity (pieces)</FormLabel>
                        <Input id="qty" type={'number'} variant={'flushed'} value={qty} onChange={handleQty}/>
                    </Box>
                    <Box width={'50%'}>
                        <FormLabel htmlFor="usedBy">Used by</FormLabel>
                        <Input id="usedBy" type={'number'} isReadOnly={true} variant={'flushed'} colorScheme={'messenger'} placeholder={usedByNames.join(', ')}/>
                    </Box>
                </Flex>
            </FormControl>
        </>
    );
}