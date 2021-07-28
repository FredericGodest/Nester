import React, { useState } from 'react';

import {
  Badge,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Card from './Card.js';
import FeelingItem from './FeelingItem.js';

export default function Hero({data, onSubmit}) {
  const [hashtag, setSearch] = useState('');
  return (
    <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}>
              Comment vas-tu,
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              petit hashtag ?
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Nester permet de visualiser le sentiment global de la Twittosphère à propos d'un hashtag.
          </Text>
          <form onSubmit={(e) => onSubmit(hashtag, e)}>
           <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
             <InputGroup size="lg">
               <InputLeftAddon children="#" />
               <Input
                 value={hashtag}
                 onChange={e => setSearch(e.target.value)}
                 placeholder="Tapez un hashtag ici"
                 fontSize="18"
               />
             </InputGroup>
             <Button
               type="submit"
               size="lg"
               rounded={'md'}
               bg={'blue.400'}
               color={'white'}
               boxShadow={
                 '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
               }
               _hover={{
                 bg: 'blue.500',
               }}
               _focus={{
                 bg: 'blue.500',
               }}>
               Rechercher
             </Button>
           </Stack>
          </form>
          <FeelingItem description="Sentiment global" value={data.final_score}/>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'}>
       <Stack direction={'column'} align={'flex-end'}>
          <Text fontSize="sm">
           <Badge ml="1" fontSize="0.8em" colorScheme="green" variant="subtle">
             Tweet le plus populaire
           </Badge>
         </Text>
        <Card data={data}/>
       </Stack>
      </Flex>
    </Stack>
  );
}
