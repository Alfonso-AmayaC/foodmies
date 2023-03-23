import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';
import Login from '../components/login';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Foodmies - Log In</title>
      </Head>
      <Box bg={'yellow'} w={'100vw'} height={'100vh'}>
          <Login />
      </Box>
    </>
  )
}

export default IndexPage
