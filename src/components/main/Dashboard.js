import React from "react";
import styled from "styled-components";
import Data from "./Data"
import {Link} from "react-router-dom"

import {Text,Stack,Image,Box,Center ,Heading,Grid, SimpleGrid, Container} from "@chakra-ui/react"
import NavbarProfile from "./NavbarProfile";

export default function Dashboard() {
   

    return (
       <React.Fragment>
           <NavbarProfile/>
           <Container maxW="container.xl">
               <SimpleGrid minChildWidth="350px" spacing="40px"  >

        {Data.map(data=>{ 
             return  <Center   py={12} >
    <Link to={`/dashboard/${data.name}`}>  <Box 
    
        role={'group'}
        p={6}
        maxW={'330px'}
        w={["80vw","70vw","70vw","90vw"]}      
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${data.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={data.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Lorem
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
        {data.name}
          </Heading>
         
        </Stack>
      </Box> </Link>
    </Center> })}
                   
               </SimpleGrid>
           </Container>
        
       </React.Fragment>
    )
}
