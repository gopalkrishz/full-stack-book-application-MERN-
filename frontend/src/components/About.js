import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  
  return (
    
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" component="h2" style={{ fontFamily: 'Arial', fontSize: '24px' }}>
  This is an all new CRUD application for an online book management system. Anyone can use it as a part and build a wonderful website from this tool.
  This project consists of backend CRUD rest api which can acces by MongoDB Atlas database perform all CRUD application
</Typography>
<Typography variant="h4" component="h6" style={{ fontWeight: 'bold' }}>
          any queries contact  @gopalkrishz027@gmail.com
        </Typography>
      </Box>
    </div>
  );
};

export default About;
