import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";


export default function NavBarPrefix(prop) {
  const logo = (
    <FontAwesomeIcon icon={faCode} size="3x" color="white" id="logo" />
  );




  return (
    <div className="navBarPrefix">
      <>
        <span>{logo}</span>
        <span id="name">【 B R 😎 / C O D E 】</span>
      </>
   
    </div>
  );
}