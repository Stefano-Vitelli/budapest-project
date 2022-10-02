import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
     return ( 
               <div className="begining">
                    <div className="interactive">
                         <Typewriter 
                              typeSpeed={86}
                              delaySpeed={20000}
                              words={["' Your life does not get better by chance, it gets better by change.'"]} />
                    </div>
                              <h1 className="first-header">I'm Stefano Vitelli</h1>
                              <h2 className="own-name"> Web Developer</h2>
                              <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars-paragraph"/>
                         <div className="paragraph">
                                        <h3 className="third-header">About me</h3>
                              <p>
                                   My name is Stefano Vitelli, a very passionate Trainee Web Developer who always have this two questions in mind into a working team...<br/><br/>
                                   What make us different? and How can we create an impact?

                                  I have been working with a few technologies like HTML, CSS, JS and REACT to answer these questions and create simple, but powerful websites.
                                   
                              </p>

                                        <h3 className='four-header'>To be more precise...</h3>
                              <p className='second-paragraph'>  
                              There are a lot of answers to the same question but I believe what makes you different is the attitude combined with the hard work. Simple?...yes Easy? Of course not...

                              
                              </p>
                              
                              <img src="/Imagenes Web/stars-custom.svg" alt="stars-sky" className="stars-end"/>
                          </div>    
               </div>
      );
}

export default Navbar;
