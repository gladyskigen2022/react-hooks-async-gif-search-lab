import React, { useEffect } from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer.js";
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"


// the App component should render out the GifListContainer component

function App() {

  useEffect(() => {
    document.title = "Giphy App"

    return (() => {})
  }, [])

  return (
    <div className="body">
      <NavBar style={{width:"85%"}} color="rgb(165, 212, 217)" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
