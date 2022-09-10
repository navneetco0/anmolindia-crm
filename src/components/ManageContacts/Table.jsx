import { PencilSquare } from '../../Assets/svg/PencilSquare'
import { Plus } from '../../Assets/svg/Plus'
import { Phone } from '../../Assets/svg/Phone'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContactUpdateModal } from './ContactUpdataModal'
import { Contact } from '../../Assets/svg/Contact'
import { addContacts, setAllContacts, setEdit } from '../../Redux/action'

export const Table = () => {
  const dispatch = useDispatch();
  const {Edit} = useSelector(state=>state.mainReducer)
  const navigate = useNavigate()
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
      <ContactUpdateModal data={Edit} />
      )}
     {allContacts.length? <table
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
          <tbody>
            {allContacts.map((Element) => (
              <tr key={Element._id}>
                <td>
                  <Box
                    color='gray'
                    cursor={'pointer'}
                    _hover={{color:'green'}}
                    onClick={() =>{ dispatch(addContacts(Element.phone&&Element.phone));navigate(`/add-client/${Element._id}`);}}
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
                    dispatch(setEdit(Element));
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
      </table>:(
        <Flex flexDir={'column'} alignItems="center">
          <Contact/>
          <Text fontSize="50px" color={'gray'} fontWeight="bold"> Empty Contact list </Text>
        </Flex>
      )}
    </Box>
  )
}
