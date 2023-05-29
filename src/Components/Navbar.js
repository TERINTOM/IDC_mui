import { AppBar,  IconButton, Toolbar,  } from "@mui/material";


const Navbar = () => {
    return ( 
      
            <AppBar sx={{backgroundColor:"#E5E5E5",position:"sticky"}}>
                <Toolbar sx={{justifyContent:"space-between"}}>
                   <a href="/"> <IconButton edge="start">
                        <img src="./logo.png" alt="logoone"></img>
                    </IconButton>
                    </a>
                  
                   
                   <a href="/"> <IconButton edge="end" >
                        <img src="./rlogo.png" alt="logotwo"></img>
                    </IconButton>
                    </a>
                    
                </Toolbar>
            </AppBar>
       
     );
}
 
export default Navbar;
