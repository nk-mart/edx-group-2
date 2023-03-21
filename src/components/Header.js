import React from "react";
import useFitText from "use-fit-text";
import '../App.css'


function Header() {
   
    const { fontSize, ref } = useFitText({
      maxFontSize: 500,

    });
  
    console.log("fontSize", fontSize);
  
    return (
      <div ref={ref} className="header"> Quote Collector</div>
    );
  }

  export default Header