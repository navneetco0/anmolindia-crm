import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Restore } from '../../Assets/svg/Restore'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTrashes } from '../../Redux/action'
import { EmptyBin } from '../../Assets/svg/EmptyBin'
import axios from 'axios'
const socket = io.connect('http://localhost:3001')

export const TrashTable = () => {
  const { allTrashes } = useSelector((state) => state.mainReducer)
  const dispatch = useDispatch()
  console.log(allTrashes)

  useEffect(() => {
    socket.on('all_trashes', (data) => {
      dispatch(setAllTrashes(data))
    })
  }, [socket, dispatch])

  return (
    <Box maxW="fit-content" m="100px auto 0px">
      {allTrashes.length ? (
        <table
          style={{
            padding: '5px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <thead>
            <tr>
              <th>Phone</th>
              <th>Manager</th>
              <th>Date</th>
              <th>Restore</th>
            </tr>
          </thead>
          <tbody>
            {allTrashes.map((Element) => (
              <tr key={Element._id}>
                <td>{Element.phone && Element.phone}</td>
                <td>{Element.manager && Element.manager}</td>
                <td>{Element.date && Element.date}</td>
                <td
                >
                  <Box
                    w="fit-content"
                    h="fit-content"
                    _hover={{
                      transform: 'rotate(360deg)',
                      transition: 'transform 2s',
                      cursor:'pointer'
                    }}
                    onClick={()=>{
                      axios.delete(`http://localhost:3001/trash/${Element._id}`)
                    }}
                  >
                    <Restore />
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Flex flexDir={'column'} alignItems="center">
          <EmptyBin />
          <Text fontSize="50px" color={'gray'} fontWeight="bold">Empty Bin </Text>
        </Flex>
      )}
    </Box>
  )
}
