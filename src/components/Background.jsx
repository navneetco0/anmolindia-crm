import { Box } from "@chakra-ui/react"
import { BackgroundSvg } from "../Assets/svg/BackgroundSvg"

export const Background = ()=>{
    return (
        <Box overflow={'hidden'} w="100%" h="100vh" position={'absolute'} zIndex={'-1'} background={'#ffb100'}>
           <BackgroundSvg />
        </Box>
    )
}