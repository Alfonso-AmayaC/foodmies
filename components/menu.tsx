import { 
    Flex, 
    Avatar, 
    Icon, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    Popover, 
    PopoverTrigger, 
    PopoverCloseButton, 
    PopoverHeader, 
    PopoverBody, 
    PopoverContent, 
    Button} from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";
import Link from 'next/link';

interface User {
    name: string,
    avatar: string
}

export default function userMenu({ name, avatar } : User) {
    return (
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Popover>
            <PopoverTrigger>
                <Flex pr={2} title={'Notifications button'} role={'button'}><Icon as={IoMdNotifications} color={'blue.500'} boxSize={{ base: 5, md: 7 }}/></Flex>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverCloseButton />
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverBody>Wujuu! No new notifications for the moment</PopoverBody>
            </PopoverContent>
            </Popover>
            <Menu>
                <MenuButton>
                    <Avatar size={{ base: 'xs', md: 'sm' }} name={name} src={avatar} bgColor={'black'}/>
                </MenuButton>
                <MenuList>
                    <Link href={'/settings'}>
                        <MenuItem>
                            Settings
                        </MenuItem>
                    </Link>
                    <Link href={'/'}>
                        <MenuItem>
                            Log out
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    );
}