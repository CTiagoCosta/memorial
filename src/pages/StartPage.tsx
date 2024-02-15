import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";
import { Image } from '@chakra-ui/react'
import sitio from '../assets/sitio.jpg'

export function StartPage() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" bg="gray.600" borderRadius="6px"  p="6">
                 <Image p="10" src={sitio} alt='Dan Abramov' />
                       
                </Box>                   
                
             </Flex>
        </Box>
    )
  }