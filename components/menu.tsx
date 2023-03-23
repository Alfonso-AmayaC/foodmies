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
        <Flex alignItems={'center'}>
            <Menu>
                <MenuButton>
                    <Avatar size={'sm'} name={name} src={avatar}/>
                </MenuButton>
                <MenuList>
                    <Link href={'/settings'}>
                        <MenuItem>
                            Configuración
                        </MenuItem>
                    </Link>
                    <Link href={'/'}>
                        <MenuItem>
                            Cerrar sesión
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <Popover>
            <PopoverTrigger>
                <Button variant={'unstyled'} p={0}><Icon as={IoMdNotifications} boxSize={6}/></Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverCloseButton />
                <PopoverHeader>Notificaciones</PopoverHeader>
                <PopoverBody>Yujuu! Sin notificaciones por el momento</PopoverBody>
            </PopoverContent>
            </Popover>
        </Flex>
    );
}