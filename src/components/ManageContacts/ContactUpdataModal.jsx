import { Box, Button, Center, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEdit } from '../../Redux/action'

export const ContactUpdateModal = ({ data }) => {
  const dispatch = useDispatch();
  const [upValues, setUpValues] = useState({
    useless: (data.useless && data.useless) || false,
    name: (data.name && data.name) || null,
    followUp: (data.followUp && data.followUp) || null,
    remarks: (data.remarks && data.remarks) || null,
    comment: (data.comment && data.comment) || null,
  })
  return (
    <Center
      bg="rgba(0,0,0, 0.2)"
      w="100%"
      h="100vh"
      top="0"
      left="0"
      position="fixed"
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
          onClick={() => dispatch(setEdit(false))}
        >
          +
        </Text>
        <Flex justifyContent={'space-between'}>
          <Box>
            <Text>
              <b>Id: </b>
              {data._id}
            </Text>
            <Text>
              <b>Phone: </b> {data.phone}
            </Text>
          </Box>
          <Checkbox
            value={upValues.useless}
            mr="50px"
            colorScheme="red"
            fontWeight={'bold'}
            size="lg"
            onChange={(e) =>
              setUpValues({ ...upValues, useless: e.target.checked })
            }
          >
            Useless
          </Checkbox>
        </Flex>
        <Flex
          gap={'2%'}
          w="100%"
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          mt="20px"
        >
          <Box mb="10px" bg="rgba(127, 127, 127, 0.5)" pt="5px" w={'49%'}>
            <label
              style={{
                display: 'block',
                marginLeft: '10px',
                fontWeight: '500',
              }}
            >
              Name
            </label>
            <Input
              value={upValues.name}
              autoComplete="auto"
              pl="10px"
              variant="flushed"
              borderColor={'gray.200'}
              focusBorderColor="rgba(255, 144, 0, 0.8)"
              id={'name'}
              onChange={(e) =>
                setUpValues({ ...upValues, [e.target.id]: e.target.value })
              }
              placeholder={`Enter name here...`}
            />
          </Box>
          <Box mb="10px" bg="rgba(127, 127, 127, 0.5)" pt="5px" w={'49%'}>
            <label
              style={{
                display: 'block',
                marginLeft: '10px',
                fontWeight: '500',
              }}
            >
              Follow Up
            </label>
            <Input
              type="datetime-local"
              value={upValues.followUp}
              autoComplete="auto"
              pl="10px"
              variant="flushed"
              borderColor={'gray.200'}
              focusBorderColor="rgba(255, 144, 0, 0.8)"
              id={'followUp'}
              onChange={(e) =>
                setUpValues({ ...upValues, [e.target.id]: e.target.value })
              }
              placeholder={`follow date and time here...`}
            />
          </Box>
          <Box mb="10px" bg="rgba(127, 127, 127, 0.5)" pt="5px" w="49%">
            <label
              style={{
                display: 'block',
                marginLeft: '10px',
                fontWeight: '500',
              }}
            >
              Remark
            </label>
            <Input
              value={upValues.remarks}
              autoComplete="auto"
              pl="10px"
              variant="flushed"
              borderColor={'gray.200'}
              focusBorderColor="rgba(255, 144, 0, 0.8)"
              id={'remarks'}
              onChange={(e) =>
                setUpValues({ ...upValues, [e.target.id]: e.target.value })
              }
              placeholder={`Enter remark here...`}
            />
          </Box>
          <Box mb="10px" bg="rgba(127, 127, 127, 0.5)" pt="5px" w="49%">
            <label
              style={{
                display: 'block',
                marginLeft: '10px',
                fontWeight: '500',
              }}
            >
              Comment
            </label>
            <Input
              value={upValues.comment}
              autoComplete="auto"
              pl="10px"
              variant="flushed"
              borderColor={'gray.200'}
              focusBorderColor="rgba(255, 144, 0, 0.8)"
              id={'comment'}
              onChange={(e) =>
                setUpValues({ ...upValues, [e.target.id]: e.target.value })
              }
              placeholder={`Enter comment here...`}
            />
          </Box>
        </Flex>
        <Button
          display={'block'}
          m="auto"
          colorScheme={'orange'}
          bg="#ff9200"
          onClick={() => {
            axios
              .patch(`http://localhost:3001/contacts/${data._id}`, {
                _id: data._id,
                phone: data.phone,
                useless: upValues.useless,
                name: upValues.name,
                date: data.date,
                followUp: upValues.followUp,
                remarks: upValues.remarks,
                comment: upValues.comment,
                manager: data.manager,
              })
              .then((res) => {
                
              })
              .catch((error) => console.log(error));
              dispatch(setEdit(false));
          }}
        >
          Save
        </Button>
      </Box>
    </Center>
  )
}
