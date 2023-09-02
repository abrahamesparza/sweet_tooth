import { useState, useEffect } from "react";

import './App.css';
import Landing from "../components/Landing";
import Header from "../components/Header";
import Page from "../components/Page";

// note: all the commented out
// code below is tied together. 

function App() {
  const [login, setLogin] = useState(false);
  const [page, setPage] = useState('');

  function handleFormClick(page) {
    console.log('text in app', page)
    setPage(page);
  }
  
  function switchForm(e) {
    e.preventDefault()
    if (!login) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }

  return (
    <>
      <div className='appContainer'>

        <div className='main'>
          <Header onSignUpClick={handleFormClick}/>
          {/*
            want to display landing first nd route the user
            to the page they click from the dropdown.
            need to figure out logic
          */}
          { setPage ? <Page showPage={page} switchForm={switchForm}/> : null}
        </div>
      </div>
    </>
  )
}

export default App
