import{Box, Typography,Button,CardContent,Card,CardMedia}from "@mui/material"
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
const Text = () => {
    // const history = useHistory();
    const content= <Typography>Contrary to popular belief, Lorem Ipsum is not simply random text. It has<br/> roots in a piece of classical Latin literature from 45 BC, making it over<br/> 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <br/> College in Virginia, looked up one of the more obscure Latin words, <br/>consectetur, from a Lorem Ipsum passage, and going through the cites<br/> of the word in classical literature, discovered the undoubtable source.<br></br> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus,<br></br> Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written <br></br> in 45 BC. This book is a treatise on the theory of ethic</Typography>
    return ( 
        <Box sx={{display:'flex',justifyContent:"space-evenly",flexWrap:"wrap"}}>
            <Box sx={{marginTop:"50px",color:" #565656",fontFamily:"Montserrat",fontSize:"18px",lineHeight:"24px"}}>
                <Typography>{content}</Typography>
                <br></br>
                <Typography>{content}</Typography>
            </Box>

            <Box sx={{width:"500px",height:"500px",marginTop:"50px"}}>
            <Card  sx={{boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.16)",border: "1px solid #E3E3E3",borderRadius:"11px"}}>
                <CardContent  >
                    <Typography variant="h4" sx={{textAlign:'center'}}>ARE YOU READY FOR </Typography>
                    <Typography variant="h5" sx={{color:"#0093D0",textAlign:"center",paddingBottom:"30px"}}>AUTOMATION?</Typography>
                    <CardMedia sx={{height:'70px',width:"78px",margin:"auto",fontSize:"32px"}} image="./Group.png"></CardMedia>
                    <Typography sx={{textAlign:'center',color:"#757575",fontSize:"16px",margin:"20px"}}> Take just 2 minutes to complete this <br/> assessment and receive your custmized <br/>rport and position </Typography>
                    <Typography sx={{color: "black",fontSize:"26px",textAlign:"center",fontWeight: "700"}}>Start Now!</Typography>
                    <Link to={"/second"}>
                    <Button variant="contained" sx={{width:"378px",height:"64px",margin:"10px 50px 2px"}} >
                        Take the Assesment
                        </Button>
                    </Link>
                    
                </CardContent>
            </Card>

            </Box>

        </Box>
     );
}
 
export default Text;