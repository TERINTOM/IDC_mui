import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

const Fourth = () => {
    return ( 
       
        <center>
        <Box sx={{display:"flex",flexWrap:"wrap",margin:"130px 0 0 220px"}}>
            <Box >
                <img src="./lastimg.png" alt="imglast" style={{width:"500px",height:"450px"}}></img>
                </Box>

            <Box >
                <Typography sx={{fontSize:"35px",color:'#000000',marginTop:"50px"}}>Thank for your</Typography>
            <Typography variant="h6" sx={{fontSize:"35px",color:'#0093D0'}} > participation</Typography>
            <Typography sx={{fontSize:"10px",color:'#565656',marginBottom:"20px"}}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has <br/> roots in a piece of classical Latin literature</Typography>


            <Box sx={{width:"320px",background:'#FFFFFF',borderRadius:"18px",boxShadow:" 0px 0px 5px rgba(0, 0, 0, 0.25"}}>
                <Card >
                    <CardMedia><img src="./finalpage.png" alt="smlogo" style={{width:"70px",objectFit:'cover',marginTop:"10px"}}></img></CardMedia>
                    <Typography sx={{fontSize:"20px"}}>Expert</Typography>
                    <Typography sx={{fontSize:"10px",color:" #757575",marginBottom:"10px"}}>Download your detailed report here</Typography>
                    <Button variant='contained' color='primary' sx={{width:'170px',height:'30px',marginBottom:"10px"}}>Download</Button>
                </Card>

            </Box>

            </Box>

        </Box>
        </center>
       
       
        
     );
}
 
export default Fourth;