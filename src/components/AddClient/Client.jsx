import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { LabelInput } from './LabelInput'
import { Wrapper } from './Styles'

export const Client = () => {
  return (
    <Wrapper>
      <LabelInput label="Name" type="text" />
      <Flex
        bg="rgba(148, 180, 159, 0.5)"
        height={'fit-content'}
        p="2px"
        w={['100%', '100%', '49%']}
      >
        <Text
          display={'block'}
          fontWeight={'500'}
          mb="5px"
          focusBorderColor="gray.500"
          mt="8px"
          ml="8px"
        >
          Type
        </Text>
        <Select ml="10px" size={'sm'} borderColor="rgba(127, 127, 127, 0.2)" id={'Type'}>
          {['Consumer', 'Traders', 'Both'].map((Element, index) => (
            <option key={index} value={Element}>
              {Element}
            </option>
          ))}
        </Select>
      </Flex>
    </Wrapper>
  )
}
