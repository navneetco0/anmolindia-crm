import { Flex, Input, Text } from "@chakra-ui/react";

export const LabelInputSelect = ({ label, data, form }) => {
  console.log(label.length)
  return (
    <Flex w={["100%","100%","49%"]} mb="20px" position={"relative"} bg="rgba(148, 180, 159, 0.5)">
      <Text display={"block"} fontWeight={"500"} pos="absolute" top={'8px'} left="5px">
        {label}
      </Text>
      <Input
      autoComplete="off"
      pl={`calc(${label.length} * 10px + 10px)`}
        variant="flushed"
        borderColor={"gray"}
        focusBorderColor="rgba(255, 144, 0, 0.8)"
        id={label}
        placeholder={`Enter your ${label} here...`}
      />
    </Flex>
  );
};
