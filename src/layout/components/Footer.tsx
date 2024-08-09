import { Box, colors, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return <><Box component={"footer"}>
  </Box>
  <Stack direction={"column"} textAlign={"center"} width={"auto"} height={"auto"} sx={{backgroundColor: "#011344",}}>
    <Box paddingTop={"32px"} paddingBottom={"32px"}  sx={{color:"white", fontFamily: 'Montserrat', fontWeight:"bold" }} >
      <Typography variant="h5"  sx={{fontWeight:"bold", fontSize:"16px", paddingBottom:"12px"}} >Facultad de farmacia y bioquimica - UBA</Typography >
      <Typography variant="h5" sx={{fontWeight:"bold", fontSize:"16px", paddingBottom:"12px"}}>Junin 954 Ciudad Autonoma de Buenos Aires, Argentina</Typography>
      <Typography variant="h5" sx={{fontWeight:"bold", fontSize:"16px", paddingBottom:"12px"}}>TE:52875000</Typography>
      <Typography variant="h5" sx={{color:"#FF8700", fontWeight:"bold", fontSize:"16px",paddingBottom:"12px"}} >Hecho con 💕 por ETEC-UBA</Typography >
      </Box>     
    </Stack></>;
};


export default Footer;
