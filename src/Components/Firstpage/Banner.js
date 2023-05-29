import { Button} from "@mui/material";
import "../Firstpage/Banner.css"
import { Link } from "react-router-dom";


const Banner = () => {
  

    return ( 

      


        <div className='banner-img'>
        <div className='img-text'>
          <h1 className='heading-txt'> Analytics Process <br/>Automation Survey</h1>
          <h6 className='heading-txt-mnr'> There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteratio </h6>
           <Link to={"/second"}>
           <Button variant='contained' color='primary' sx={{width:'270px',height:'60px',}} > 
           TAKE THE ASSESMENT 
           
         
           </Button></Link>
        </div>
      </div>
     );
}
 
export default Banner;