import React from "react";
import Navbar from "./Navbar";
import RedesSociales from "./RedesSociales";
import { ContactUs } from "./ContactForm";
import DinamicNavBar from "./DinamicNavBar";



function App() {
  
  return (
    <div className="content">
      <main className="main-content">
      <DinamicNavBar />
         <Navbar />
      </main>
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