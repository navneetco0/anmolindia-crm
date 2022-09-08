import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"


export const Navbar = ()=>{
     const navigate = useNavigate();
    return (
        <Flex position="fixed" w="100%" top="0" left="0" padding="5px 40px" bg="black" zIndex={5} justifyContent="space-between" borderBottom="1px solid rgba(127, 127, 12, 0.2)" color="gold">
            <Center >
                <Text fontSize={'40px'} fontWeight="500">ANM</Text><Image className="logoImg" src={logo} alt="" w="40px" h="40px" /><Text fontSize={'40px'} fontWeight='500'>L</Text>
            </Center>
            <Center>
               <Text cursor={'pointer'} fontWeight={"500"}  onClick={() => navigate('/manage-contact')} _hover={{textDecoration:'underline'}}>Manage Contacts</Text>
            </Center>
        </Flex>
    )
}