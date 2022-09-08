import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Requirements } from "../components/Requirements";
import axios from "axios";
import { Client } from "../components/Client";
import { ContactBox } from "../components/ContactBox";
import { AddressBox } from "../components/AddressBox";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

export const AddClient = ()=>{
    const {Contacts, requirements} = useSelector(state=>state.mainReducer);
  const [form, setForm] = useState({
    Name: "",
    Type: "Consumer",
    State: "Andhra Pradesh",
    Commodity: "",
    From: "",
    Industry: "",
    Destination: "",
    phone: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = (e) => {
    console.log(Contacts);
    console.log(requirements)
    axios
      .post("http://localhost:3001/client", {
        Name: form.Name,
        Type: form.Type,
        State: form.State,
        District: form.District,
        Email: form.Email,
        Landline: form.Landline,
        Contacts:Contacts,
        requirements
      })
      .then((res) => console.log(res.data));
  };
    return (
      <>
        <Navbar/>
        <Box h="100vh" overflow={"scroll"} w="90%" >
        <form
          onChange = {(e) => handleChange(e)}
          onSubmit = {(e) =>{e.preventDefault()}}
          style={{
            marginTop: "90px",
            width: "calc(100%)",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor:"white",
            padding:'20px',
            borderRadius:"6px",
            border:'1px solid rgba(255, 146, 0, 0.18)'
          }}
        >
          <Client/>
          <ContactBox form={form}/>
          <AddressBox form={form}/>
          <Requirements form={form} />
          <Button margin={'auto'} colorScheme="yellow" display={'block'} bg="#ff9200" onClick={()=>handleSubmit()} mb="20px">Add</Button>
        </form>
        </Box>
      </>
    )
}