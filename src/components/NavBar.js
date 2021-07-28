import {
    Text,
    Stack,
    Flex
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function NavBar(){
    return(
        <Stack direction={'row'} p={'2vw'}>
          <Flex flex={1} align={'center'} justify={'center'}>
           <Text fontSize="2xl" textAlign="left ">
               <img width='30%' height='auto' src='/logo-nester.png' alt="logo" />
           </Text>
          </Flex>
          <Flex flex={1} align={'center'} justify={'flex-end'}>
            <ColorModeSwitcher justifySelf="flex-end" mx={'5px'}/>
          </Flex>
        </Stack>

    )
};

export default NavBar;
