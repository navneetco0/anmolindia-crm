import { Box, Input, Text } from "@chakra-ui/react";

export const LabelInputSelect = ({ label, data, form }) => {
  return (
    <Box w={["100%","100%","49%"]} mb="20px" position={"relative"} bg="rgba(148, 180, 159, 0.5)">
      <Text display={"block"} fontWeight={"500"} ml="10px" mt="10px">
        {label}
      </Text>
      <Input
      autoComplete="off"
        variant="flushed"
        borderColor={"gray.200"}
        focusBorderColor="rgba(255, 144, 0, 0.8)"
        id={label}
        placeholder={`Enter your ${label} here...`}
        paddingLeft="10px"
      />
    </Box>
  );
};
