
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Full from "./Components/Firstpage/Full";
import LoginFull from "./Components/Secondpage/LoginFull";
import TpageFull from "./Components/Thirdpage/TpageFull";
import LastFull from "./Components/Fourthpage/LastFull";
function App() {
  return (
 <div>
  <Router>
    <Routes>

      <Route path="/" element={<Full/>}></Route>

      <Route path="/second" element={<LoginFull/>}></Route>

      <Route path="/third" element={<TpageFull/>}></Route>
      
      <Route path="/fourth" element={<LastFull/>}></Route>

    </Routes>
  </Router>
 </div>


  );
}

export default App;
