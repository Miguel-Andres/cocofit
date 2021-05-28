import {
  Container,
  Heading,
  Stack,
  Avatar,
  TagLabel,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import Styled from "styled-components"


export default function NavbarProfile() {
  return (
    <React.Fragment>
      <Stack  boxShadow="2xl" p={1} style={{ backgroundImage: `url("./image/fondofondo.jpg")` }} >
        <Container  minW="container.xl">
          <Stack direction="row" justifyContent="space-between" p={1}>
            <Heading  color="#FF8ED0 " >Corinna  Fit</Heading>

            <Tag size="lg"  bgGradient="linear(to-r, green.200, pink.500)" p="1px">
              <TagLabel fontWeight="bold" ml="1px">Juan Andres</TagLabel>
              <Avatar
                size="sm"
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
                ml={2}
                mr={1}
               
              />
            </Tag>
          </Stack>
        </Container>
      </Stack>
    </React.Fragment>
  );
}
