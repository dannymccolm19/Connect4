//Daniel Mccolm
//251092776
import React from "react";
import Game from "./components/Game";

//Sets the background colour
document.body.style = 'background: black;';

//loads game and sets the title
const App = () => <div><h1 style ={{ display: 'flex', color:'white', justifyContent:'center', alignItems:'center'}}>Connect Four</h1><Game /></div>;


export default App;
