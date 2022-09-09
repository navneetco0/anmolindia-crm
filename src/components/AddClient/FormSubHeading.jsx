import { Text } from "@chakra-ui/react"

export const FormSubHeading = ({text})=>{
    return (
        <Text
            borderBottom="2px solid rgba(255, 146, 0, 1)"
            fontWeight={"500"}
            color="#ff9200"
            textAlign={"center"}
            width="100%"
            pb="5px"
            m="10px 0px"
          >
            {text}
          </Text>
    )
}