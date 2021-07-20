import {
    Grid,
    Text
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function NavBar(){
    return(
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <Text fontSize="2xl" textAlign="left ">NESTER</Text>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
    )
};

export default NavBar;