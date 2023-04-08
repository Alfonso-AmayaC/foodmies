import { Tabs, TabList, Tab, TabPanels, TabPanel, Grid, GridItem, Box, Button, Skeleton, useDisclosure } from "@chakra-ui/react";
import { PantryItem } from "./PantryItem";
import { useContext } from 'react';
import { PantryContext } from "./PantryContext";
import NotFound from "./NotFound";
import { pantryItem } from "../types";
import { Selected } from "./Selected";
import { AddItemModal } from "./modals/AddItemModal";

export default function Dashboard() {
    const { data, error, isLoaded, selected, setSelected } = useContext( PantryContext );
    const titles = isLoaded ? ['fruits'] : [''];
    const items = isLoaded ? data['fruits'].map((_, index) => 
                    <TabPanel p={0} h={'100%'} key={index}>
                        <Grid templateColumns={'repeat(6, 1fr)'} h={'100%'}>
                            <GridItem colSpan={2} overflowY={'scroll'}>
                                {data['fruits'].map((pantryItem: pantryItem) => <PantryItem key={pantryItem.name} data={pantryItem} onClick={
                                    () => {
                                        if(selected.name === pantryItem.name)
                                            setSelected({name:''})
                                        else 
                                            setSelected(pantryItem)
                                    }
                                    }/>)
                                }
                                <Box textAlign={'center'} pt={'0.5em'}>
                                    <AddItemModal tab={titles[0]}/>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Box p={'5'}>
                                    {selected.name !== '' ? <Selected pantryItem={selected} metadata={{tab:titles[index]}}/> : ''}
                                </Box>
                            </GridItem>
                        </Grid>
                    </TabPanel>
                ) : ''

    return (
        <Skeleton isLoaded={isLoaded}>
            <Tabs variant={'enclosed'}>
                <TabList display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                    <Box display={'flex'}>
                        {titles.map(title => <Tab key={title}>{title}</Tab>)}
                        <AddItemModal tab={'s'}/>
                    </Box>
                </TabList>
                <TabPanels minHeight={'30.2vh'} maxHeight={'38vh'} borderBottom={'1px'} borderX={'1px'} borderBottomRadius={'lg'} borderColor={'#E2E8F0'} boxShadow={'lg'} overflowY={'scroll'} position={'relative'}>
                    {!error ? items : <NotFound messageText="Foc, no pudimos recuperar datos del servidor" buttonText="Reintentar" route="pantry"/>}
                </TabPanels>
            </Tabs>
        </Skeleton>
    );
}

const Modal = () => {

}