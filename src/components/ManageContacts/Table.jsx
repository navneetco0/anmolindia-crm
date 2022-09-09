import { PencilSquare } from '../../Assets/svg/PencilSquare'
import { Plus } from '../../Assets/svg/Plus'
import { Phone } from '../../Assets/svg/Phone'
import { Box, Center, Text, useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ContactUpdateModal } from '../ContactUpdataModal'

export const Table = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [Edit, setEdit] = useState(null)
  const { allContacts } = useSelector((state) => state.mainReducer)
  return (
    <Box
      maxW={['100%', 'fit-content']}
      overflow={'scroll'}
      maxHeight="500px"
      minHeight={'fit-content'}
      borderRadius="10px"
      m={'30px auto 10px'}
    >
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
  )
}
