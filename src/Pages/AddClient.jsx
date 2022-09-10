import { Flex } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { Detail } from '../components/AddClient/Detail'
import { Form } from '../components/AddClient/Form'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const AddClient = () => {
  const { id } = useParams()
  const { data } = useQuery(['client_data', id], () => {
    return axios.get(`http://localhost:3001/contacts/${id}`)
  })
  return (
    <>
      <Navbar />
      <Flex h="100vh" overflow={'scroll'} w="90%" gap="2%">
        {data&&<Detail data={data} />}
        {data&&<Form  data={data}/>}
      </Flex>
    </>
  )
}
