import {
    Stat,
    StatLabel,
    StatNumber,
    Box,
  } from "@chakra-ui/react"

function StatItem(props){
    var value = props.value;
    const description = props.description;
    const background = props.background;
    if (value === undefined){
        value = 0
    }
    return(
        <Box textAlign='center'>
           <Stat
            p={2}
            bg={background}
            fontSize={'sm'}
            rounded={'lg'}
            color={'white'}
            >
                <StatLabel>{description}</StatLabel>
                <StatNumber>{value}</StatNumber>
            </Stat>
        </Box>
    )
}

function FeelingItem(props){
    const feeling = props.value;
    const description = props.description;

    let feelingText = ""
    let backGround = "gray.300"

    if (feeling < -0.01) {
        feelingText = "Négatif"
        backGround = "red.300"
    } else if (feeling === undefined){
        feelingText = "En attente"
    } else if (feeling > 0.118) {
        feelingText = "Positif"
        backGround = "green.300"
    } else {
        feelingText = "Neutre"
        backGround = "blue.300"
    };

    return(
        <StatItem description={description} value={feelingText} background={backGround}/>
    )
}

export default FeelingItem
