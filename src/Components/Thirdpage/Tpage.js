import { Grid,Button,Typography, } from "@mui/material";
import { useState } from "react";
// import Pbar from "../Thirdpage/Pbar"
import { useNavigate } from "react-router-dom";

const Tpage = (props) => {
    
  const Navigate= useNavigate()
   
    const sampleData = [
        {
          question:
            "DATA PRACTICES - Which of the following best describes the data governance of your organization, or the area you oversee?",
          options: [
            "There is no c",
            "hello",
            "hi",
            "bye"
            
            
          ],
        },
        {
            question:
              "DATA PRACTICES - Which of the followin fastest vehicle one the earth on, or the area you oversee?",
            options: [
              "There is no c",
              "bike",
              "car",
              "bus"
              
              
            ],
          },
          {
            question:
              "DATA PRACTICES - Which of the followin fastest vehicle one the earth on, or the area you oversee?",
            options: [
              "There is no c",
              "biddke",
              "caaar",
              "budds"
              
              
            ],
          },
      ];


 
      const [currentDataIndex, setCurrentDataIndex] = useState(0);
      const [t,SetT]=useState(50)
      const handleNext = () => {
        if (currentDataIndex < sampleData.length - 1) {
          setCurrentDataIndex(currentDataIndex + 1);
          SetT(t+50)
          props.p(t)

        }else{
           Navigate("/fourth")
        }

       
      };
    
      const currentData = sampleData[currentDataIndex];

    return ( 
      <center>
          {/* <Pbar/>  */}
       
      

<Grid lg={6} item container sx={{ marginTop: "200px" }} spacing={2}>
        <Grid container spacing={2}>
          <Grid item sm={12} sx={{ marginTop: "20px" }}>
            <Typography>{currentData.question}</Typography>
          </Grid>

          {currentData.options.map((option, optionIndex) => (
            <Grid item sm={6} key={optionIndex}>
              <Button variant="outlined" sx={{ width: "308px", height: '57px' }}>
                <Typography sx={{ color: "black" }}>{option}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid item sm={6}>
          <Button variant="contained" sx={{ width: "127px", height: "51px", margin: '10px 0px 60px', bgcolor: "black" }} 
          onClick={handleNext}
          >
            <Typography>Next</Typography>
          </Button>
        </Grid>
      </Grid>
       
    
     </center>
   
     
     );
}
 
export default Tpage;




