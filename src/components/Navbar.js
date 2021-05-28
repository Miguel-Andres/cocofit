import {
    Box,
    Flex,
    Text,  
    Button,
    Stack,  
    Heading,  
    useColorModeValue,   
  } from '@chakra-ui/react';
  
      
 import Logo from "../assets/Logo.svg"





  
  export default function WithSubnavigation() {
  
  
    return (
      <Box>
        <Flex         
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
         
              <img src={Logo} width="50px" alt="logo"/>
          
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >


            <Heading
            
              textAlign="center"              
              display={{base:"none" , md:"flex" }}
             
           >
               Corinna CocoFit
            </Heading>
          
            <Heading
             fontSize={"xl"}
              display={{md :"none"}}
              >
             Corinna fit
            </Heading>
  
          
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
       
      </Box>
    );
  }  
  

  

  
  
 