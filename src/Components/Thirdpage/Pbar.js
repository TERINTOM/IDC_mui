import { AppBar, Box, Typography } from "@mui/material";
// import CustomizedProgressBars from "../Thirdpage/Lbar"
import Lbar from "../Thirdpage/Lbar"
import { useState } from "react";
import Tpage from "./Tpage";
const Pbar = () => {
const [Prog,setProg]=useState(0);

const Progress=(change)=>{
    setProg(change)
}
    return ( 
        <div>
       <AppBar sx={{marginTop:"70px",bgcolor:"#0E6183",height:"60px",}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{marginTop:"10px"}}>
                <Typography>lets get started</Typography>
            </Box>
            <Box sx={{marginRight:"10px"}}>
                {/* {CustomizedProgressBars()} */}
             <Lbar name={Prog}/>
            </Box>
            </Box>
       </AppBar> 
       <Tpage p={Progress}/> 
       </div> 
       
     );
}
 
export default Pbar ;