import { Text } from "@chakra-ui/react"

export const FormSubHeading = ({text})=>{
    return (
        <Text
            pos={"absolute"}
            borderBottom="2px solid rgba(255, 146, 0, 1)"
            fontWeight={"500"}
            color="#ff9200"
            textAlign={"center"}
            width="calc(100% - 40px)"
            pb="5px"
          >
            {text}
          </Text>
    )
}