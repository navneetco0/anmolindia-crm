import { Box, Flex, Input, Text, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addContacts } from '../../Redux/action'
import { ContactTag } from '../ContactTag'
import { FormSubHeading } from './FormSubHeading'
import { LabelInput } from './LabelInput'
import { Wrapper } from './Styles'

export const ContactBox = ({ form }) => {
  const { Contacts } = useSelector((store) => store.mainReducer)
  const dispatch = useDispatch()
  const toast = useToast()
  const handleContact = () => {
    let match = Contacts.find((cont) => cont === form.phone)
    if (match)
      toast({
        position: 'top',
        title: 'Enter another phone number!',
        status: 'warning',
        isClosable: true,
      })
    if (!match && form.phone) dispatch(addContacts(form.phone))
  }
  return (
    <Wrapper>
      <FormSubHeading text={'Contact'} />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        gap="2%"
        w="100%"
      >
        <Flex
          bg="rgba(148, 180, 159, 0.5)"
          h="fit-content"
          w={['100%', '100%', '49%']}
          position={"relative"} mb="10px"
        >
          <Text display={'block'} fontWeight={'500'} pos="absolute" top={'8px'} left="5px">Phone</Text>
          <Flex position={'relative'} w="100%">
            <Input
            borderColor={'gray'}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleContact()
              }}
              autoComplete="off"
              id="phone"
              pl="60px"
              type="tel"
              value={form.phone}
              variant="flushed"
              placeholder="Enter your phone number..."
              focusBorderColor="rgba(255, 144, 0, 0.8)"
              onChange={() => {}}
            />
            <Box
              right={'0px'}
              bottom={'1px'}
              position={'absolute'}
              bg="#c9d9cf"
              cursor={'pointer'}
              p="7px"
              fontWeight={'600'}
              color="gray"
              _hover={{
                bg: 'rgba(255, 146, 0, 0.9)',
                color: 'white',
                fontSize: '17px',
              }}
              _active={{
                bg: '#ff9200',
                color: 'white',
                fontSize: '16px',
              }}
              onClick={() => handleContact()}
            >
              {' '}
              Add{' '}
            </Box>
          </Flex>
        </Flex>
        <LabelInput label="Email" type="email" />
        <LabelInput label="Landline" type="tel" />
      </Flex>
    </Wrapper>
  )
}
