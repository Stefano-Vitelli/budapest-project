import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
     return ( 
               <div className="begining">
                    <div className="interactive">
                         <Typewriter 
                              typeSpeed={86}
                              delaySpeed={20000}
                              words={["' Your life does not get better by chance, it gets better by change.'"]}
                         />
                    </div>
                    <h1 className="first-header"> I'm Stefano Vitelli</h1>
                         <h2 className="own-name">a very curious man</h2>
                         <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars-paragraph"/>
                              <div className="paragraph">
                              <h3 className="third-header">About me</h3>
                                   <p>
                                   I am twenty-six years old Argentinian-Italian citizen, that never wants to stop learning. 
                                   After finishing my two degrees in my home country, I decided to move to Europe 
                                   to broaden the horizon of knowledge and develope new skills.
                                   Currently I am a Trainee Web Developer who is looking to a continue growing with one aim:
                                   become a Full Stack Developer. 
                                   </p>
                              </div>
                              

                         
               </div>
                              

     

      );
}

export default Navbar;