import {
    Box,
    Grid,
    Text,
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function NavBar(){
    return(
        <Box m={5}>
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <Text fontSize="2xl" textAlign="left ">
                    <img width='20%' height='auto' src='/logo.png' alt="image" />
                </Text>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Grid>
        </Box>

    )
};

export default NavBar;
