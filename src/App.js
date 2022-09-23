import React from "react";
import Navbar from "./Navbar";
import Interactive from "./Interactive";
import RedesSociales from "./RedesSociales";
import { ContactUs } from "./ContactForm";


function App() {
  
  return (
    
  <div className="App">
        <Navbar />
        <Interactive />
        <RedesSociales />
        
  </div>
  );
}

export default App;



const WebRoutesToPass = () => {
  return(
    <div>
      <ContactUs />
    </div>
  );
}

const LinksContainer = ({children}) => { 
  return (
    <div>
      {children}
    </div>

  );
}

export const WebRoutes = (props) => {
  return (

   <div>
     
      <LinksContainer>
      <WebRoutesToPass />
      </LinksContainer>
  </div>
  );
}