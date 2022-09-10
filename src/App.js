import {Center } from "@chakra-ui/react";
import "./App.css";
import { Router } from "./Router";
import { Background } from "./components/Background";
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { setAllContacts, setAllTrashes } from "./Redux/action";
const socket = io.connect('http://localhost:3001');

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    socket.on('all_contacts', (data) => {
      dispatch(setAllContacts(data))
    });
    socket.on('all_trashes', (data)=>{
      dispatch(setAllTrashes(data));
   });
  }, [socket])
  
  return (
    <Center position={"relative"} w={"100%"} h="100vh" >
      <Router/>
      <Background />
    </Center>
  );
}

export default App;