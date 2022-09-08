import { Box, Center, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/logo.png'

export const Home = () => { 
  const {allContacts} = useSelector(state=>state.mainReducer);
  const [find, setFind] = useState('')
  const navigate = useNavigate();
  const handleChange = (e)=>{
     setFind(e.target.value);
  }

  return (
    <Box w="100%" h={'100vh'} position="relative">
      <Center
        pos={'absolute'}
        zIndex={5}
        right="10"
        top="0"
        p="20px 10px"
      >
        <Center>
          <Text cursor={'pointer'} fontWeight={"500"}  onClick={() => navigate('/manage-contact')} _hover={{textDecoration:'underline'}}>Manage Contacts</Text>
        </Center>
        {/* <Grid/> */}
      </Center>
      <Center mt="100px">
        <Text fontSize={'70px'} fontWeight="500">
          ANM
        </Text>
        <Image className="logoImg" src={logo} alt="" w="70px" h="70px" />
        <Text fontSize={'70px'} fontWeight="500">
          L
        </Text>
      </Center>
      <Center borderRadius={'50px'} w="40%" m="20px auto" pos="relative">
        <input
          style={{
            width: '100%',
            outline: 'transparent',
            padding: '5px 20px 5px 40px',
            height: '50px',
            borderRadius: '25px',
            fontSize:'20px'
          }}
          onChange={(e)=>handleChange(e)}
        />
        <Box pos="absolute" w="100%"></Box>
      </Center>
    </Box>
  )
}
