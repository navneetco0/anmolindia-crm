import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useQuery } from "react-query"
import { FormSubHeading } from "./FormSubHeading"
import { LabelSelect } from "./LabelSelect"
import { Wrapper } from "./Styles"

export const AddressBox = ({form})=>{
    const { data } = useQuery("States", () => {
        return axios.get("http://localhost:3001/states");
      });
    return (
        <Wrapper>
        <FormSubHeading text={'Address'} />
        {data ? (
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "2%",
            }}
            w="100%"
          >
            <LabelSelect label="State" data={data.data} />
            <LabelSelect
              label="District"
              data={
                data.data.find(({ name }) => name === form.State).districts
              }
            />
          </Box>
        ) : (
          ""
        )}
      </Wrapper>
    )
}