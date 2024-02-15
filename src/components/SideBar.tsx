import {  Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { RiArrowRightCircleLine,
         RiBriefcase4Line,
         RiCalendar2Line,
         RiHome2Line,
         RiUserAddLine
        } from "react-icons/ri";
import { NavLink } from "./NavLink";


export function Sidebar() {
  return (
    <Stack 
      spacing="10" 
      align="flex-start" 
      borderRadius="4px" 
      padding="30px"
    >
      
        <NavLink icon={RiHome2Line} href="#home">Home</NavLink>
     
      
        <NavLink icon={RiCalendar2Line} href="#weeklyshifts">Depoimentos</NavLink>
   
        <NavLink icon={RiUserAddLine} href="#userregistration">Vídeos</NavLink>
        <NavLink icon={RiArrowRightCircleLine} href="/">Fotos</NavLink>
        <NavLink icon={RiBriefcase4Line} href="/">Músicas</NavLink>
   
    </Stack>
   
  )
}