import { useState, useEffect } from "react";

import './App.css';
import Header from "../components/Header";
import Page from "../components/Page";

function App() {
  const [page, setPage] = useState('');

  function handleFormClick(page) {
    console.log('text in app', page)
    setPage(page);
  }

  return (
    <>
      <div className='appContainer'>

        <div className='main'>
          <Header onSignUpClick={handleFormClick}/>
          { setPage ? <Page showPage={page} /> : null}
        </div>
      </div>
    </>
  )
}

export default App
