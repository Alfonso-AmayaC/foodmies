import { Tabs, TabList, Tab, TabPanels, TabPanel, Grid, GridItem, Box, Button, Flex, Heading } from "@chakra-ui/react";
import Image from 'next/image'
import PantryItem from "./pantryItem";
import ghost from '../public/ghost.svg';
import {useState, useEffect} from 'react';

/**
 * Data contains the title of the tabs and the data itself
 * Depending on the quantity, the respective tabs will show, 
 * e.g. if there aren't any apples the Fruits tab must show when it comes to the "need to buy" section 
 * but if there are apples the Fruits tab won't appear.
 */
export default function Dashboard({ data } : { data: Array<any> }) {
    
    const titles = data.map((category) => Object.keys(category).toString())

    return (
        <Tabs variant={'enclosed'}>
            <TabList display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                <Box display={'flex'}>
                    {titles.map(title => <Tab key={title}>{title}</Tab>)}
                </Box>
                <Button colorScheme={'blue'} variant={'solid'} size={'sm'} isDisabled={true}>Actualizar</Button>
            </TabList>
            <TabPanels minHeight={'30.2vh'} maxHeight={'30.2vh'} borderBottom={'1px'} borderX={'1px'} borderBottomRadius={'lg'} borderColor={'#E2E8F0'} boxShadow={'lg'} overflowY={'scroll'}>
                {data.map((category, index) => 
                    <TabPanel p={0} h={'100%'} key={category}>
                        <Grid templateColumns={'repeat(6, 1fr)'} h={'100%'}>
                            {category[titles[index]].map(pantryItem => <PantryItem name={pantryItem.name} qty={pantryItem.qty} key={pantryItem.name}/>)}
                        </Grid>
                    </TabPanel>
                )}
            </TabPanels>
        </Tabs>
);
}