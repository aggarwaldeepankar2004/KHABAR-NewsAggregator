import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import LoadingBar from "react-top-loading-bar";

const App = () => {

const[progress, setProgress] = useState(0);
const[dataFromNav, setDataFromNav] = useState("");

 const handleDataFromNav = (value) => {
    setDataFromNav(value);
  };

 const handleQuery = () => {
    setDataFromNav("");
  }

  return (
    <>
    <BrowserRouter>
    <LoadingBar
        color="#f11946"
        progress={progress}
    />
    <Navbar sendDataToApp={handleDataFromNav} setQuery={handleQuery}></Navbar>
    <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} key={"general" + (dataFromNav)} category={dataFromNav? " " : "general"} q={dataFromNav}></News>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} key={"entertainment" + (dataFromNav)} category={dataFromNav? " " : "entertainment"} q={dataFromNav}></News>}></Route>
      <Route exact path="/business" element={<News setProgress={setProgress} key={"business" + (dataFromNav)} category={dataFromNav? " " : "business"} q={dataFromNav}></News>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports" + (dataFromNav)} category={dataFromNav? " " : "sports"} q={dataFromNav}></News>}></Route>
      <Route exact path="/health" element={<News setProgress={setProgress} key={"health" + (dataFromNav)} category={dataFromNav? " " : "health"} q={dataFromNav}></News>}></Route>
      <Route exact path="/science" element={<News setProgress={setProgress} key={"science" + (dataFromNav)} category={dataFromNav? " " : "science"} q={dataFromNav}></News>}></Route>
      <Route exact path="/general" element={<News setProgress={setProgress} key={"general" + (dataFromNav)} category={dataFromNav? " " : "general"} q={dataFromNav}></News>}></Route>
      <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology" + (dataFromNav)} category={dataFromNav? " " : "technology"} q={dataFromNav}></News>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;