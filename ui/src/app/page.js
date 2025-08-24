
"use client"
import "./style/home.scss"

import * as motion from "motion/react-client"

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#305870",
    borderRadius: 5,
    marginLeft: "30px"
}
export default function Home() {
  return (
    <>
    <div className="header">
      dresean.com is being built right now! stay tuned for updates :) 
    </div>
    <motion.div style={box} animate={{ rotate: 5040 }} transition={{ duration: 120 }}/>
    </>
  );
}
