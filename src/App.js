import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';

async function getTweets(hashtag){
  const link = 'https://twittetrandapi.herokuapp.com/' + hashtag
  let response = await fetch(link);
  let data = await response.json()
  return data;
}

function App() {

  const [data, setData] = useState({});

  function onSubmit(hashtag, e) {
    e.preventDefault();
    getTweets(hashtag).then(data =>
      setData(data));
  }

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <NavBar/>
        <Hero data={data} onSubmit={onSubmit}/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
