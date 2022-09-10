import { Box } from "@chakra-ui/react"
import { Detail } from "../../Assets/svg/Detail"

export const AllClients = ({data})=>{
    console.log(data)
    return (
        <Box flexGrow={1} mt="95px" m="auto" ml={'205px'} maxH="calc(100vh - 115px)" overflow="scroll">
           {data?
             <table style={{backgroundColor:'white', borderRadius:'10px', padding:'10px', margin:'auto'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>District</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((Element)=>
                           <tr key={Element._id}>
                            <td>{Element._id}</td>
                            <td>{Element.name}</td>
                            <td>{Element.type}</td>
                            <td>{Element.district}</td>
                            <td><Box cursor="pointer"><Detail/></Box></td>
                           </tr>
                        )
                    }
                </tbody>
             </table>
           :""}
        </Box>
    )
}