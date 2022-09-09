import { Flex, Box, Text } from '@chakra-ui/react'
import { AllContacts } from '../../Assets/svg/AllContacts';
import { Trash } from '../../Assets/svg/Trash';
import { useDispatch, useSelector } from 'react-redux'
import { manageContactStatus } from '../../Redux/action'

export const Sidebar = () => {
  const dispatch = useDispatch();
  const {manage_contact_status} = useSelector(state=>state.mainReducer);
  const data = [
    { title: 'All Contacts', icon:<AllContacts/>, fill:'all_contacts'},
    { title: 'Trash', icon: <Trash />, fill: 'trash' }
  ]
  return (
    <Box
      position={'fixed'}
      width="200px"
      bg="white"
      height={'100vh'}
      overflowY="scroll"
      pr="10px"
      pt="100px"
    >
      {data.map((Element, index) => (
        <Flex
          key={index}
          p="5px 10px"
          borderRadius={'0px 10px 10px 0px'}
          bg={Element.fill===manage_contact_status?"rgba(127, 127, 127, 0.5)":"rgba(127, 127, 127, 0.2)"}
          borderRight={Element.fill===manage_contact_status?"4px solid #ff9200":"4px solid transparent"}
          gap="5%"
          mb="10px"
          _hover={{ color: 'black', cursor: 'pointer' }}
          onClick={() => dispatch(manageContactStatus(Element.fill))}
        >
          {Element.icon}
          <Text fontWeight={'bold'} color={Element.fill===manage_contact_status?"#ff9200":"gray"}> {Element.title} </Text>
        </Flex>
      ))}
    </Box>
  )
}
