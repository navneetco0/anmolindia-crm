import { Box, Flex } from "@chakra-ui/react"
import axios from "axios"
import { useQuery } from "react-query"
import { AllClients } from "../components/Clients/AllClients"
import { Sidebar } from "../components/Clients/Sidebar"
import { Navbar } from "../components/Navbar"

export const Client = ()=>{
    const {data} = useQuery('get_client_data', ()=>{
        return axios.get('http://localhost:3001/client')
    });
    return (
        <Box w="100%">
            <Navbar/>
            <Flex gap='5px' w="100%">
                <Sidebar data={data?.data}/>
                {data?.data&&<AllClients data={data.data}/>}
            </Flex>
        </Box>
    )
}