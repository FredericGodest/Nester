import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  ButtonGroup,
  Link,
  Badge,
  Skeleton,
  SkeletonText,
  useColorModeValue,
} from '@chakra-ui/react';
import FeelingItem from './FeelingItem.js';

export default function Card({data}) {
  return (
    <Center py={6} mx={{sm:8, md:0}}>
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
          src={
            'https://f.hellowork.com/blogdumoderateur/2019/11/twitter-logo.jpg'
          }
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
          Membre Twitter
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
            <Skeleton isLoaded={(data.total_fav !== undefined)}>
              <Text fontWeight={600}>{data.total_fav}</Text>
            </Skeleton>
            <Text fontSize={'sm'} color={'gray.500'}>
              Likes
            </Text>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Skeleton isLoaded={(data.total_fav !== undefined)}>
              <Text fontWeight={600}>{data.total_RT}</Text>
            </Skeleton>
            <Text fontSize={'sm'} color={'gray.500'}>
              Retweets
            </Text>
          </Stack>
        </Stack>
        <Stack mt={8}>
          <FeelingItem description="Sentiment" value={data.final_score}/>
        </Stack>
      </Box>
    </Center>
  );
}