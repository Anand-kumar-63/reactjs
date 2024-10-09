import User from "./user"; 
import Userclass from "./Userclass";

const About = () => {
  return (
    <div className="about_section">
      
      <h1>This is the about section of React.js</h1>
      <User name={"Dpak Kumar"} Contact={"6306*****0"} />
      <Userclass name={"Anand Kumar"} Contact={"hello@gmail.com"} />
    </div>
  );
};

export default About;
