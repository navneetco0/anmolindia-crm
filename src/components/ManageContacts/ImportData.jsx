import { Button, Center, Circle, Square, Text, useToast } from "@chakra-ui/react"
import Draggable from "react-draggable";
import { Excell } from "../../Assets/svg/Excell";
import * as XLSX from 'xlsx'
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { resContacts, resDuplicates, resTrashes } from "../../Redux/action";

export const ImportData = ()=>{
  const toast = useToast();
  const dispatch = useDispatch();
    const [excelFile, setExcelFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    const handleFile = (event) => {
        let file = event.target.files[0]
        setFileName(file.name)
        let reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = function (event) {
          setExcelFile(event.target.result)
        }
      }
    
      const handleSubmit = () => {
        if (excelFile !== null) {
          const workbook = XLSX.read(excelFile, { type: 'buffer' })
          console.log(workbook)
          const worksheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[worksheetName]
          const data = XLSX.utils.sheet_to_json(worksheet)
          let modified_data = []
          data.map((Element) => {
            if (Element.phone)
              modified_data = [
                ...modified_data,
                {
                  phone: Element.phone,
                  manager: 'Navneet',
                  date: Element.date
                    ? Element.date
                    : new Date().toLocaleDateString(),
                },
              ];
          })
          axios.post('http://localhost:3001/contacts', modified_data).then((res)=>{
            if(res.data.duplicate){
              dispatch(resDuplicates(res.data.duplicate));
              toast({
                position:'top',
                title: `found ${res.data.duplicate.length} duplicate contact`,
                status: 'info',
                isClosable: true,
              });
            }
            if(res.data.contacts){
              dispatch(resContacts(res.data.contacts));
              toast({
                position:'top',
                title: `found ${res.data.contacts.length} new contact`,
                status: 'info',
                isClosable: true,
              });
            }
            if(res.data.trashes){
              dispatch(resTrashes(res.data.trashes));
              toast({
                position:'top',
                title:`found ${res.data.trashes.length} trashed contact`,
                status: 'info',
                isClosable: true,
              });
            }
          })
          .catch(error=>{console.log(error)})
        } else {
        }
      }

    return (
        <Draggable>
        <Center
          pos={'absolute'}
          bottom="40px"
          right={'120px'}
          border="1px solid #ff920045"
          borderRadius={'55px 10px 10px 55px'}
          p="5px"
          cursor={'move'}
        >
          <Circle
            border={'1px solid #ff9200'}
            size="100px"
            _hover={{ bg: '#ff9200' }}
            overflow="hidden"
            position={'relative'}
          >
            <input
              type={'file'}
              style={{
                position: 'absolute',
                opacity: '0',
                width: '100px',
                height: '100px',
              }}
              onChange={(e) => handleFile(e)}
            />
            <Square
              size={'50%'}
              _hover={{ transform: 'scale(1.2)', transition: 'transform 1s' }}
              _active={{
                transform: 'scale(1.1)',
                transition: 'transform 0.5s',
              }}
            >
              <Excell />
            </Square>
          </Circle>
          <Center p="5px">
            <Text>{fileName && fileName}</Text>
            <Button colorScheme={'whatsapp'} onClick={() => handleSubmit()}>
              import data
            </Button>
          </Center>
        </Center>
      </Draggable>
    )
}