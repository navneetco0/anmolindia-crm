import { Box, Flex, Input, Text } from "@chakra-ui/react"


export const LabelInput = ({label, type})=>{
    return (
        <Flex w={["100%","100%","49%"]} bg="rgba(148, 180, 159, 0.5)" position={"relative"}>
          <Text display={'block'} fontWeight={'500'} pos="absolute" top={'8px'} left="5px">{label}</Text>
          <Input autoComplete="auto" pl="80px" variant='flushed' borderColor={'gray.200'} focusBorderColor='rgba(255, 144, 0, 0.8)' id={label} placeholder={`Enter your ${label} here...`} />
        </Flex>
    )
}