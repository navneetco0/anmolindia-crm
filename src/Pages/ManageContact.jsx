import { Box,  Flex, Text, useToast } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios';
import { ImportData } from '../components/ManageContacts/ImportData'
import { Table } from '../components/ManageContacts/Table'
import { Sidebar } from '../components/ManageContacts/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { TrashTable } from '../components/ManageContacts/TrashTable';
import { resContacts, resDuplicates, resTrashes } from '../Redux/action';

export const ManageContact = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [contact, setContact] = useState(null);
  const {manage_contact_status} = useSelector(state=>state.mainReducer);

  const handleContact = () => {
    axios.post('http://localhost:3001/contacts', {
      phone: contact,
      manager: 'Navneet',
      date: new Date().toLocaleDateString(),
    }).then((res)=>{
      if(res.data.duplicate){
        dispatch(resDuplicates(res.data.duplicate));
        toast({
          position:'top',
          title: `found ${res.data.duplicate.length} duplicate contact`,
          status: 'info',
          isClosable: true,
        });
      }
      if(res.data.contacts){
        dispatch(resContacts(res.data.contacts));
        toast({
          position:'top',
          title: `found ${res.data.contacts.length} new contact`,
          status: 'info',
          isClosable: true,
        });
      }
      if(res.data.trashes){
        dispatch(resTrashes(res.data.trashes));
        toast({
          position:'top',
          title:`found ${res.data.trashes.length} trashed contact`,
          status: 'info',
          isClosable: true,
        });
      }
    })
    .catch(error=>{console.log(error)})
  }
  return (
    <Box w="100%" minH={'100vh'} position="relative">
      <Navbar />
      <Sidebar/>
      {manage_contact_status==='all_contacts'?<>
      <ImportData/>
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
        type={'tel'}
        minlength={"10"} maxlength={10}
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
      <Table/></>:manage_contact_status==='trash'?<TrashTable/>:""}
    </Box>
  )
}
