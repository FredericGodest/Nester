import React, { useState } from 'react';

import StatDisplay from './StatDisplay.js';
import Tweet from './TweetDisplay.js';
import NavBar from './NavBar.js';
import SmallFooter from './Footer.js';

import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
  Button,
  VStack
} from '@chakra-ui/react';


async function getTweets(hashtag){
  const link = 'https://twittetrandapi.herokuapp.com/' + hashtag
  let response = await fetch(link);
  let data = await response.json()
  return data;
}

function App() {
  const [hashtag, setSearch] = useState('');
  const [results, setResults] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    getTweets(hashtag).then(data => 
      setResults(data)); 
    
  }

  let data = {
    bestTweet : results.best_tweet,
    totalFav : results.total_fav,
    totalRT : results.total_RT,
    sentiment : results.final_score,
    bestAccount : results.best_account,
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="40vh" p={3}>
          <NavBar />

            <form onSubmit={onSubmit}>
                <VStack
                  spacing={4}
                  align="stretch"
                >
                  <Input 
                    value={hashtag}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Hashtag #" 
                    textAlign='center' 
                    fontSize="30" 
                    size="lg"
                  />

                  <Button colorScheme="teal" size="md" type="submit">
                    Rechercher
                  </Button>
                </VStack>
              
            </form>

          <Tweet bestAccount={data.bestAccount} bestTweet={data.bestTweet}/>

          <StatDisplay totalFav={data.totalFav} totalRT={data.totalRT} sentiment={data.sentiment}/>

        </Grid>
      </Box>

      <SmallFooter />
    </ChakraProvider>
  );
}

export default App;
