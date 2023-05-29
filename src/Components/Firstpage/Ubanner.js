import { Box, Typography } from "@mui/material";

const Ubanner = () => {
    const content=<Typography>Contrary to popular belief,<br></br> Lorem Ipsum s not simply<br></br> random text</Typography>
    return ( 
        
            
            <Box sx={{width:"100%",backgroundColor:"#F8F8F8",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            <Box sx={{width:'333px',height:"112px",paddingLeft:"150px",display:"flex",alignItems:"center"}}>
               
               <img alt="one" src="./imgone.png" style={{width:"92px",height:'97px'}}></img>
               <Typography>{content}</Typography>
            </Box>
            <Box sx={{width:'333px',height:"112px",paddingLeft:"150px",display:"flex",alignItems:"center"}}>
               <img alt="two" src="./imgtwo.png" style={{width:"92px",height:'97px'}}></img>
               <Typography>{content}</Typography>
            </Box>
            <Box sx={{width:'333px',height:"112px",paddingLeft:"150px",display:"flex",alignItems:"center"}}>
               <img alt="one" src="./imgthree.png" style={{width:"92px",height:'97px'}}></img>
               <Typography>{content}</Typography>
            </Box>
       </Box>
           

     );
}
 
export default Ubanner;