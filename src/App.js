import "./css/App.css";


import Formic from "./components/Formic";
import Loading from "./components/loading";
import NotFound from "./components/notFound";

// import { motion }  from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 1500);

  return (
    <div className="App">
      {delay == false && <Loading/>}
      {delay == true && (
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <Formic />
        </motion.div>
      )}
    </div>
  );
}

export default App;
