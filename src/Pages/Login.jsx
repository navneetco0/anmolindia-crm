import { useDispatch } from 'react-redux'
import { Box, Button, Center, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { Email } from '../Assets/svg/Email';
import { Key } from '../Assets/svg/Key';
import axios from 'axios'

export const Login = () => {
  const toast = useToast()
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    password: '',
    status: null,
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value, status: e.target.id })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://offingo.herokuapp.com/login', {
        username: form.username,
        password: form.password,
      })
      .then((res) => {
        fetch('/api/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: res.data.token }),
        })
        toast({
          position: 'top',
          title: `login successful`,
          status: 'success',
          isClosable: true,
        })
      })
      .catch((error) => {
        toast({
          position: 'top',
          title: `invalid username or password`,
          status: 'error',
          isClosable: true,
        })
      })
  }

  return (
    <Box>
      <Center
        w={'100%'}
        minH={['fit-content', 'fit-content', 'calc(100vh - 100px)']}
      >
        <Box
          border={['', '', '1px solid rgba(127, 127, 127, 0.2)']}
          p="10px 20px"
          borderRadius={'12px'}
          w={['600px']}
          mt="100px"
          bg="white"
        >
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <Text
              fontSize={'50px'}
              fontWeight={500}
              textAlign="center"
              mb={'20px'}
            >
              Sign In
            </Text>
            <div
              style={{
                border: '1px solid rgba(127, 127, 127, 0.4)',
                padding: '4px',
                borderRadius: '8px',
                boxShadow:
                  form.status === 'username'
                    ? 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, #89cffd5f 0px 0px 0px 1px inset'
                    : '10px 10px 10px rgba(0, 0, 0, 0)',
              }}
            >
              <Center w="fit-content" gap={'5px'}>
                {' '}
                <Email /> <label>Email</label>
              </Center>
              <input
                id="username"
                value={form.username}
                style={{
                  display: 'block',
                  marginLeft: '17px',
                  outline: 'transparent',
                }}
                required
                type="email"
                placeholder="Enter your email here..."
                onFocus={() => setForm({ ...form, status: 'username' })}
                onBlur={() => setForm({ ...form, status: null })}
                onChange={() => {}}
              />
            </div>
            <div
              style={{
                border: '1px solid rgba(127, 127, 127, 0.4)',
                padding: '4px',
                margin: '20px 0',
                borderRadius: '8px',
                boxShadow:
                  form.status === 'password'
                    ? 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, #89cffd5f 0px 0px 0px 1px inset'
                    : '10px 10px 10px rgba(0, 0, 0, 0)',
              }}
            >
              <Center w="fit-content" gap={'5px'}>
                {' '}
                <Key /> <label>Password</label>
              </Center>
              <input
                id="password"
                value={form.password}
                required
                style={{
                  display: 'block',
                  marginLeft: '17px',
                  outline: 'transparent',
                }}
                type="password"
                placeholder="Enter your email here..."
                onFocus={() => setForm({ ...form, status: 'password' })}
                onBlur={() => setForm({ ...form, status: null })}
                onChange={() => {}}
              />
            </div>
            <div
              style={{
                width: '125px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              <Button colorScheme={'orange'} bg="#ff9200" > Login </Button>
            </div>
          </form>
        </Box>
      </Center>
    </Box>
  )
}
