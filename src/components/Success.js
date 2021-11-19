import "../css/Success.css";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";

const NotFound = () => {
  return (
    <motion.div
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
  >
  
      <div id="success" style={{backgroundImage:`url(/hackdoze01/hackdoze/Black-Animation-Background.svg)`}}>
        <div className="success" >
          <div className="success-201">
            <h1>Thank You</h1>
          </div>
          <h2></h2>
          <p style={{fontSize:"20px"}}>
        Stay tuned with us for more details </p>
          <p>Follow us  <a className="face-icon" href="https://www.facebook.com/HackDoze"><BsFacebook style={{fontSize:"30px"}}/> </a> </p>
     
          <a href="https://hackdoze01.github.io/v1/">Go To Homepage</a>
        </div>
      </div>
      </motion.div>
   
  );
};

export default NotFound;
