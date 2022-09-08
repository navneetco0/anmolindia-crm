import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'

export const ContactUpdateModal = ({ data }) => {
  const [upValues, setUpValues] = useState({
    useless: (data.useless && data.useless) || false,
    name: (data.name && data.name) || null,
    followUp: (data.followUp && data.followUp) || null,
    remarks: (data.remarks && data.remarks) || null,
    comment: (data.comment && data.comment) || null,
  })
  return (
    <>
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
          onChange={(e) => setUpValues({...upValues, useless:e.target.checked})}
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
            style={{ display: 'block', marginLeft: '10px', fontWeight: '500' }}
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
            style={{ display: 'block', marginLeft: '10px', fontWeight: '500' }}
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
            style={{ display: 'block', marginLeft: '10px', fontWeight: '500' }}
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
            style={{ display: 'block', marginLeft: '10px', fontWeight: '500' }}
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
          axios.patch(`http://localhost:3001/contacts/${data._id}`, {
            _id:data._id,
            phone:data.phone,
            useless:upValues.useless,
            name: upValues.name,
            followUp: upValues.followUp,
            remarks: upValues.remarks,
            comment: upValues.comment,
            manager:data.manager
          }).then(res=>{}).catch((error)=>console.log(error));
        }}
      >
        Save
      </Button>
    </>
  )
}
