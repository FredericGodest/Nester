import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Tweet(props) {
    var tweet = props.bestTweet;
    var account = props.bestAccount;

    if (tweet === undefined){
      tweet = "Le meilleur tweet s'affichera ici"
      account = "le meilleur compte twitter s'affichera ici"
    }

  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        {tweet}
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg'
        }
          alt={account}
          mb={2}
        />

        <Text fontWeight={600}>{account}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Membre Twitter
        </Text>
      </Box>
    </Stack>
  );
}