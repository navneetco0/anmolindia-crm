import { Box, Flex, Select, Text } from "@chakra-ui/react";

export const LabelSelect = ({ label, data }) => {
  
  return (
    <Flex w={["100%","100%","49%"]} bg="rgba(148, 180, 159, 0.5)" h='fit-content' p="2px" mb="10px">
      <Text mt="2px" display={'block'} fontWeight={'500'} mb="5px" focusBorderColor='gray.500' ml="8px">{label}</Text>
      <Select ml="10px" size={'sm'} borderColor='rgba(127, 127, 127, 0.2)' id={label} >
        {data &&
          data.map((Element, index) => (
            <option key={index} value={Element.name}>{Element.name}</option>
          ))}
      </Select>
    </Flex>
  );
};
