import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {Client} from "./Client";
import { ContactBox } from "./ContactBox";
import { Requirements } from "./Requirements";
import { AddressBox } from "./AddressBox";
import { Button } from "./Botton";
import { setFormData } from "../../Redux/action";

export const Form = () => {
    const dispatch = useDispatch();
  const { Contacts, requirements } = useSelector((state) => state.mainReducer)
  const [form, setForm] = useState({
    Name: '',
    Type: 'Consumer',
    State: 'Andhra Pradesh',
    Commodity: '',
    From: '',
    Industry: '',
    Destination: '',
    phone: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    dispatch(setFormData({ ...form, [e.target.id]: e.target.value }))
  }
  const handleSubmit = (e) => 
    axios
      .post('http://localhost:3001/client', {
        Name: form.Name,
        Type: form.Type,
        State: form.State,
        District: form.District,
        Email: form.Email,
        Landline: form.Landline,
        Contacts: Contacts,
        requirements,
      })
      .then((res) => console.log(res.data))
  return (
    <Box
      w="calc(98% - 380px)"
      h="calc(100vh - 90px)"
      bg="white"
      mt="90px"
      border="1px solid rgba(255, 146, 0, 0.18)"
      p="20px 20px 0 20px"
      borderRadius={'6px'}
      overflowY="scroll"
    >
      <form
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => {e.preventDefault()}}
        style={{width: '100%'}}
      >
        <Client />
        <ContactBox form={form} />
        <AddressBox form={form} />
        <Requirements form={form} />
        <Button
          margin={'auto'}
          colorScheme="yellow"
          display={'block'}
          bg="#ff9200"
          onClick={() => handleSubmit()}
          mb="20px"
        >
          Add
        </Button>
      </form>
    </Box>
  )
}
