import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { RiMenuLine } from "react-icons/ri";


export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex 
            as="header"
            w="100%"
            h="32"
            mx="auto"
            display="flex"
            px="6"
            align="center"
            bg="gray.600"
        >
            
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    mr="2"
                >

                </IconButton>
            )}
        
            <Logo />

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />                
            </Flex>
            
        </Flex>
    )
}
