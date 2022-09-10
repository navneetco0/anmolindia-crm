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
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export const Form = ({data}) => {
  const navigate = useNavigate();
  const toast = useToast();
    const dispatch = useDispatch();
  const { Contacts, requirements } = useSelector((state) => state.mainReducer)
  const [form, setForm] = useState({
    Name: data?.data.name?data.data.name:'',
    Type: 'Consumer',
    State: 'Andhra Pradesh',
    Commodity: '',
    From: '',
    Industry: '',
    Destination: '',
    phone: data?.data.phone?data.data.phone:'',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    dispatch(setFormData({ ...form, [e.target.id]: e.target.value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Contacts.length){
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
      .catch(error=>console.log(error));
      toast({
        position:'top',
        title: `Client added successfully`,
        status: 'success',
        isClosable: true,
      });
      navigate('/clients')
    }
      else  toast({
        position:'top',
        title: `please add atleast one contact number`,
        status: 'warning',
        isClosable: true,
      })
  }
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
        onSubmit={(e) => handleSubmit(e)}
        style={{width: '100%'}}
      >
        <Client />
        <ContactBox form={form} />
        <AddressBox form={form} />
        <Requirements form={form} />
        <Button>Add</Button>
      </form>
    </Box>
  )
}
