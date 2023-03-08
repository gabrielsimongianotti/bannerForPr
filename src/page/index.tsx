import React, { useEffect } from 'react';
import logo from '../logo.svg';
import './App.css';
import { api } from '../services/api';
import { Banner } from '../component/baner';
import {SignIn} from '../component/Login'
function App() {
  useEffect(()=>{
    const apiData = async ()=>{
      let owner ='nodejs'
      let repo ='node'
      let pull_number ='46900'
      console.log("oi")
      const response = await api
      .get(`/repos/${owner}/${repo}/pulls/${pull_number}`)
      .catch(error=>{console.log(error)})
      console.log(response)
    } 
    apiData()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <SignIn/>
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
