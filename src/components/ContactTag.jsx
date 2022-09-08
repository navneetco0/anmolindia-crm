import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeContact } from "../Redux/action";

export const ContactTag = ({Element, index}) =>{
    const dispatch = useDispatch();
    return (
        <Tag
        size={Element}
        borderRadius="full"
        variant="solid"
        background={"#ff9200"}
        p={"5px 10px"}
        whiteSpace="nowrap"
      >
        <TagLabel>+91 {Element}</TagLabel>
        <TagCloseButton
          onClick={() => dispatch(removeContact(Element))}
        />
      </Tag>
    )
}