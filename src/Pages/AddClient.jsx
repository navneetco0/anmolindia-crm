import { Flex } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { Detail } from '../components/AddClient/Detail'
import { Form } from '../components/AddClient/Form'

export const AddClient = () => {
  return (
    <>
      <Navbar />
      <Flex h="100vh" overflow={'scroll'} w="90%" gap="2%">
        <Detail/>
        <Form/>
      </Flex>
    </>
  )
}
