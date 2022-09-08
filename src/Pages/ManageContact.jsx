import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Square,
  Text,
  useToast,
} from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { PencilSquare } from '../Assets/svg/PencilSquare'
import { ContactUpdateModal } from '../components/ContactUpdataModal'
import { useSelector } from 'react-redux'
import { Excell } from '../Assets/svg/Excell'
import * as XLSX from 'xlsx'
import Draggable from 'react-draggable'
import { Plus } from '../Assets/svg/Plus'
import { useNavigate } from 'react-router-dom'
import { Phone } from '../Assets/svg/Phone'

export const ManageContact = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [excelFile, setExcelFile] = useState(null)
  const [fileName, setFileName] = useState(null)

  const handleFile = (event) => {
    let file = event.target.files[0]
    setFileName(file.name)
    let reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = function (event) {
      setExcelFile(event.target.result)
    }
  }

  const handleSubmit = () => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' })
      console.log(workbook)
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const data = XLSX.utils.sheet_to_json(worksheet)
      let modified_data = []
      data.map((Element) => {
        if (Element.phone)
          modified_data = [
            ...modified_data,
            {
              phone: Element.phone,
              manager: 'Navneet',
              date: Element.date
                ? Element.date
                : new Date().toLocaleDateString(),
            },
          ]
      })
      axios.post('http://localhost:3001/contacts', modified_data)
    } else {
    }
  }
  const [contact, setContact] = useState(null)
  const [Edit, setEdit] = useState(null)
  const { allContacts } = useSelector((state) => state.mainReducer)

  const handleContact = () => {
    axios.post('http://localhost:3001/contacts', {
      phone: contact,
      manager: 'Navneet',
      date: new Date().toLocaleDateString(),
    })
  }
  return (
    <Box w="100%" minH={'100vh'} position="relative">
      <Navbar />
      <Draggable>
        <Center
          pos={'absolute'}
          bottom="40px"
          right={'120px'}
          border="1px solid #ff920045"
          borderRadius={'55px 10px 10px 55px'}
          p="5px"
          cursor={'move'}
        >
          <Circle
            border={'1px solid #ff9200'}
            size="100px"
            _hover={{ bg: '#ff9200' }}
            overflow="hidden"
            position={'relative'}
          >
            <input
              type={'file'}
              style={{
                position: 'absolute',
                opacity: '0',
                width: '100px',
                height: '100px',
              }}
              onChange={(e) => handleFile(e)}
            />
            <Square
              size={'50%'}
              _hover={{ transform: 'scale(1.2)', transition: 'transform 1s' }}
              _active={{
                transform: 'scale(1.1)',
                transition: 'transform 0.5s',
              }}
            >
              <Excell />
            </Square>
          </Circle>
          <Center p="5px">
            <Text>{fileName && fileName}</Text>
            <Button colorScheme={'whatsapp'} onClick={() => handleSubmit()}>
              import data
            </Button>
          </Center>
        </Center>
      </Draggable>
      <Flex
        borderRadius={'50px'}
        w="40%"
        m="100px auto 0px"
        position={'relative'}
        justifyContent="end"
        alignItems={'center'}
      >
        <Text
          onClick={() => handleContact()}
          position="absolute"
          fontSize="30px"
          color="gray"
          mr="10px"
          _hover={{ cursor: 'pointer' }}
          _active={{ fontSize: '28px' }}
        >
          +
        </Text>
        <input
          style={{
            width: '100%',
            outline: 'transparent',
            padding: '5px 20px 5px 40px',
            height: '50px',
            borderRadius: '25px',
            fontSize: '20px',
          }}
          placeholder="Enter contact here..."
          onChange={(e) => setContact(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleContact()
          }}
        />
      </Flex>
      {Edit && (
        <Center
          bg="rgba(0,0,0, 0.2)"
          w="100%"
          h="100vh"
          top="0"
          l="0"
          position="absolute"
          zIndex={'7'}
        >
          <Box
            w={['90%', '80%', '70%', '50%']}
            h="300px"
            position={'relative'}
            bg="white"
            m="auto"
            p="10px"
            borderRadius={'10px'}
          >
            <Text
              fontSize={'30px'}
              fontWeight="500"
              pos="absolute"
              transform={'rotate(45deg)'}
              right="10px"
              top="10px"
              cursor={'pointer'}
              onClick={() => setEdit(null)}
            >
              +
            </Text>
            <ContactUpdateModal data={Edit} />
          </Box>
        </Center>
      )}
      <Box maxW={["100%", "fit-content"]} overflow={"scroll"} maxHeight="500px" minHeight={'fit-content'}  borderRadius='10px' m={'30px auto 10px'}>
        <table
          style={{
            padding: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Phone</th>
              <th>Name*</th>
              <th>Follow Up</th>
              <th>Remarks</th>
              <th>Comments</th>
              <th>Manager</th>
              <th>Date</th>
              <th>Edit</th>
              <th>call</th>
            </tr>
          </thead>
          {allContacts && (
            <tbody>
              {allContacts.map((Element) => (
                <tr key={Element._id}>
                  <td>
                    <Box
                      color={Element.name ? 'green' : 'red'}
                      cursor={Element.name ? 'pointer' : 'not-allowed'}
                      onClick={() =>
                        Element.name
                          ? navigate(`/add-client/${Element._id}`)
                          : toast({
                              position: 'top',
                              title: `Please provide client name first`,
                              status: 'error',
                              isClosable: true,
                            })
                      }
                    >
                      <Plus />
                    </Box>
                  </td>
                  <td>{Element.phone && Element.phone}</td>
                  <td>{Element.name && Element.name}</td>
                  <td>{Element.followUp && Element.followUp}</td>
                  <td>{Element.remarks && Element.remarks}</td>
                  <td>{Element.comment && Element.comment}</td>
                  <td>{Element.manager && Element.manager}</td>
                  <td>{Element.date && Element.date}</td>
                  <td
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setEdit(Element)
                    }}
                  >
                    <PencilSquare />
                  </td>
                  <td>
                    <Box color="green" cursor={'pointer'}>
                      <Phone />
                    </Box>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </Box>
    </Box>
  )
}
