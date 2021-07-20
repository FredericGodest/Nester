import {
    Stat,
    StatLabel,
    StatNumber,
    Grid,
    Box,
    useColorModeValue,
  } from "@chakra-ui/react"

function StatItem(props){
    const value = props.value;
    const description = props.description;
    const background = props.background;
    return(
        <Box>
            <Stat bg={background} rounded={'lg'} border={'1px solid'} shadow={'xl'} borderColor={useColorModeValue('gray.800', 'gray.500')}>
                <StatLabel>{description}</StatLabel>
                <StatNumber>{value}</StatNumber>
            </Stat>
        </Box>
    )
}

function SentimenItem(props){
    const sentiment = props.value;
    const description = props.description;

    let sentimentText = ""
    let backGround = "gray.300"

    if (sentiment < 0) {
        sentimentText = "Négatif"
        backGround = "orange.300"
    } else if (sentiment < 0.118) {
        sentimentText = "Neutre"
    } else {
        sentimentText = "Positif"
        backGround = "green.300"
    };

    return(
        <StatItem description={description} value={sentimentText} background={backGround}/>
    )
}

function StatDisplay(props){
    const totalFav = props.totalFav;
    const totalRT = props.totalRT;
    const sentiment = props.sentiment;
    return(
        <div>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                
                <StatItem description="Total de Favori" value={totalFav} background="red.200"/>

                <SentimenItem description="Sentiment" value={sentiment} />
                
                <StatItem description="Total de ReTweet" value={totalRT} background="blue.200"/>

            </Grid>
        </div>
      )
}


export default StatDisplay