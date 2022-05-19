import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const NavBar = ({libraryStatus,setLibraryStatus}) => {
  const handleLibraryStatus =() =>{
    setLibraryStatus(!libraryStatus);
  }
  return(
  <nav>
      <h1>Waves</h1>
      <button onClick={handleLibraryStatus}>
          Library
          <FontAwesomeIcon icon={faMusic} />
      </button>
  </nav>
)};

export default NavBar;
