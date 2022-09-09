import { Box, Flex, Text } from "@chakra-ui/react"
import axios from "axios";
import { useQuery } from "react-query";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

export const Detail = ()=>{
    const {id} = useParams();

    const {data} = useQuery(['client_data', id], ()=>{
        return axios.get(`http://localhost:3001/contacts/${id}`)
    })

    const { formData, Contacts, requirements } = useSelector(state=>state.mainReducer);
    return (
        <Flex
        flexDirection={'column'}
          w="300px"
          maxHeight="calc(100vh - 90px)"
          minHeight={'fit-content'}
          bg="white"
          mt="90px"
          borderRadius={'6px'}
          p="20px"
        >
        <Text><b>Id: </b> {id} </Text>
         <Text><b>Name: </b> {formData.Name&&formData.Name||data?.data?.name}</Text>
         <Text><b>Type: </b>{formData.Type&&formData.Type}</Text>
         <Flex>
            <Text><b>Contacts: </b> </Text>
            <Flex flexWrap={'wrap'}>
                <Text m='0 5px'>{data?.data?.phone}</Text>
                {Contacts.length&&Contacts.map((Element, index)=><Text m="0 5px">{Element}</Text>)}
            </Flex>
         </Flex>
         <Text><b>Email: </b> {formData.Email&&formData.Email}</Text>
         <Text><b>Landline: </b> {formData.Landline&&formData.Landline}</Text>
         <Text><b>State: </b> {formData.State && formData.State}</Text>
         <Text><b>District: </b> {formData.District && formData.District}</Text>
         <Box flexGrow="1" w="100%" border={'1px solid rgba(127, 127, 127, 0.2)'} mt="10px" borderRadius={'6px'} >
            <Text textAlign={'center'} fontWeight="500" borderBottom={'2px solid gray'} p="4px">Requirements</Text>
            <ol>
                {requirements&&requirements.map((Element, index)=><ul>
                    
                </ul>)}
            </ol>
         </Box>
        </Flex>
    )
}