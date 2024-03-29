import { Stack, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionPropos {
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionPropos) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.600" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}