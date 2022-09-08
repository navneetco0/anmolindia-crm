import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { LabelInput } from "./LabelInput";
import { LabelInputSelect } from "./LabelInputSelect";
import { States } from "./Data";
import { Wrapper } from "./Styles";
import { FormSubHeading } from "./FormSubHeading";
import {useDispatch, useSelector} from 'react-redux'
import { addRequirements } from "../Redux/action";

export const Requirements = ({form}) => {
  const {requirements} = useSelector(state=>state.mainReducer);
  const dispatch = useDispatch();
  console.log(form);
    let destinations = [];
    States.map((Element,index)=>
       Element.districts.map((ele,i)=>destinations.push(ele.name))
    )
  return (
    <Wrapper>
      <FormSubHeading text={"Requirements"}/>
      {requirements?
      <Flex mt={"40px"}  flexWrap= "wrap"
      justifyContent= "space-between"
      gap= "2%"
      w="100%"
      border= '1px solid rgba(255, 146, 0, 0.1)'
      borderRadius={'8px'}
      mb="10px"
      maxHeight={'200px'}
      overflow="scroll"
      >
    {requirements.map((Element, index)=><Box key={index} w={['100%', '100%', '49%']} p="10px" bg="rgba(255, 146, 0, 0.05)" mb="10px" borderRadius={'5px'}>
      <Text>{Element.commodity} - {Element.from}</Text>
      <Text>{Element.industry} - {Element.destination}</Text>
      <Text><b>Quantity:</b> {Element.quantity}</Text>
    </Box>)}
  </Flex>:""}
      <Flex
          flexWrap= "wrap"
          justifyContent= "space-between"
          gap= "2%"
          w="100%"
      >
        <LabelInputSelect label="Commodity" type="text" data={['USA', 'Indonesia', 'Russian Coal']} form={form}/>
        <LabelInputSelect label="From" type="text" data={['USA', 'Indonesia', 'Russian']} form={form} />
        <LabelInputSelect label="Industry" type="text" data={['Paper', 'Cement', 'Steal']} form={form} />
        <LabelInputSelect label="Destination" type="text" data={destinations} form={form} />
        <LabelInput label="Quantity" type="number" />
      </Flex>
      <Box height={"50px"}>
      </Box>
      <Button disabled={!form.Commodity || !form.From || !form.Industry || !form.Destination || !form.Quantity} h="50px" bg="#ff9200" colorScheme={'yellow'} position="absolute" width={'calc(100% - 40px)'} bottom="20px" onClick={()=>{dispatch(addRequirements({
        commodity:form.Commodity, from:form.From, industry:form.Industry, destination:form.Destination, quantity:form.Quantity 
      }))
      }} >Add more</Button>
    </Wrapper>
  );
};
