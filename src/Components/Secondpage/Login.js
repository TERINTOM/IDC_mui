import { Grid,Button,Typography,TextField, } from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
    
    return ( 
       <center>
        
        
        <Grid lg={6} item  container  sx={{backgroundColor:"#F5F5F5",marginTop:"100px"}} spacing={2} >

            <Grid item sm={12} sx={{marginTop:"20px"}}><Typography variant="h4" >Register Now</Typography>
            <br/>
            <Typography> Contrary to popular belief, Lorem Ipsum is not simply random text</Typography>
            </Grid>
           
        <Grid item sm={6}><TextField label="First Name" variant="outlined"sx={{width:"308px",height:'57px'}}></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Last Name" variant="outlined"sx={{width:"308px",height:'57px'}} ></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Bussiness Email" variant="outlined"sx={{width:"308px",height:'57px'}} type="email"></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Organization" variant="outlined"sx={{width:"308px",height:'57px'}}></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Job title" variant="outlined"sx={{width:"308px",height:'57px'}} type="search"select></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Job Function" variant="outlined"sx={{width:"308px",height:'57px'}} type="search" select></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Country" variant="outlined"sx={{width:"308px",height:'57px'}} type="search"select></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Number of Employee" variant="outlined"sx={{width:"308px",height:'57px'}} type="search"select></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Industry" variant="outlined"sx={{width:"308px",height:'57px'}} type="search"select></TextField>
        </Grid>

        <Grid item sm={6}><TextField label="Company Type" variant="outlined"sx={{width:"308px",height:'57px'}} type="search" select></TextField>
        </Grid>

        <Grid item sm={6}></Grid>

        <Grid item sm={6}>
           <Link to={"/third"} ><Button variant="contained" color="primary" sx={{width:"207px",height:"61px",margin:'10px 0px 60px',}} >
            <Typography>Register</Typography>
        </Button>
        </Link> 

        </Grid>
        
        </Grid>

       </center>
     );
}
 
export default Login;