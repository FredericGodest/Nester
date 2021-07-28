import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Skeleton,
  SkeletonText,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card({data}) {
  function renderAvatar(){
   if(data.best_account !== undefined){
    return data.best_account
   }else{
    return 'twitter'
   }
  }
  function renderFeeling(){
    let feeling={
     text: "",
     bg: "gray.300"
    }

    if (data.best_sentiment < -0.01) {
        feeling.text = "Négatif"
        feeling.bg = "red.300"
    } else if (data.best_sentiment === undefined){
        feeling.text = "En attente"
    } else if (data.best_sentiment > 0.12) {
        feeling.text = "Positif"
        feeling.bg = "green.300"
    } else {
        feeling.text = "Neutre"
        feeling.bg = "blue.300"
    };

    return feeling.text;
  }
  return (
    <Center py={0} mx={{sm:8, md:0}}>
      <Box
        minW='40vw'
        maxW={'620px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={'https://unavatar.vercel.app/twitter/' + renderAvatar()}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.best_account_name}
        </Heading>
        <Skeleton isLoaded={(data.best_account !== undefined)}>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{(data.best_account !== undefined)?data.best_account:"le meilleur compte twitter s'affichera ici"}
        </Text>
        </Skeleton>
        <SkeletonText mt="4" noOfLines={4} spacing="4" isLoaded={(data.best_tweet !== undefined)}>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {(data.best_tweet !== undefined)?data.best_tweet:"Le meilleur tweet s'affichera ici"}
        </Text>
        </SkeletonText>
        <Stack direction={'row'} justify={'center'} spacing={6} mt={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Likes
            </Text>
            <Skeleton isLoaded={(data.best_fav !== undefined)} width={'5vw'} height={'4vh'}>
              <Text fontWeight={600}>{data.best_fav}</Text>
            </Skeleton>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Retweets
            </Text>
            <Skeleton isLoaded={(data.best_RT !== undefined)} width={'5vw'} height={'4vh'}>
              <Text fontWeight={600}>{data.best_RT}</Text>
            </Skeleton>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Sentiment
            </Text>
            <Skeleton isLoaded={(data.best_sentiment !== undefined)} width={'5vw'} height={'4vh'}>
              <Text fontWeight={600}>{renderFeeling()}</Text>
            </Skeleton>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
