import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  return (
    <div className="begining">
      <div className="interactive">
        <Typewriter
          className="text-change"
          typeSpeed={86}
          delaySpeed={20000}
          words={["Nothing permanent, but change."]}
        />
      </div>
      <h1 className="first-header">I'm Stefano Vitelli</h1>
      <h2 className="own-name"> Trainee Web Developer</h2>
      <img
        src="/web-images/stars-custom.svg"
        alt="stars-sky"
        className="stars-paragraph"
      />
      <div className="paragraph">
        <h3 className="third-header">About me</h3>
        <p>
          My name is Stefano Vitelli, a very passionate and dedicate Trainee Web
          Developer.
          <br />
          My aim is to become a Full Stack Developer and to achieve this I have been working from the base of HTML, CSS and Javascript to React js and Node Js to create powerful websites. <br />
          <br />
        </p>
        <h3 className="four-header">Values</h3>
        <p className="second-paragraph">
          I believe that being dedicate, hard working, communicative, passionate about what you
          do and always keeping the best attitude into a working team, is the
          key to face each project and create something really good. <br />
          <br />
          I am always eager to work in real projects to solve real issues.<br />
          <img
            src="/web-images/stars-custom.svg"
            alt="stars-sky"
            className="stars-end"
          />
        </p>
        <ul class="social-media">
          <li>
            <a
              href="https://github.com/Stefano-Vitelli"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                class="iconoGitHub"
                src="/web-images/github-white.svg"
                alt="gato github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/34602501446"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                class="logo-whatsapp"
                src="/web-images/whatsapp-white.svg"
                alt="whatsapp"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stefano-vitelli-01931a17a/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                class="linkedin"
                src="/web-images/linkedInV2-fill-white.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
