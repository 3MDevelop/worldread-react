import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavSection from './components/NavSection/index'
import Banner from './components/Banner/index'
import Footer from './components/Footer'
import BookDis from './components/BookDis/index'
import Competition from './components/Competition'
import UserSection from './components/UserSection'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  const [siteLang, setSiteLang] = useState('ar')
  const [userAuth, setUserAuth] = useState(false)
  const userAuthHandler = (UserSit) => {
    setUserAuth(UserSit)
  }

  const [userInfo, setUserInfo] = useState([])
  const userInfoLangHandler = (inLang) => {
    setUserInfo({
      lang: inLang
    })
  }


  useEffect(()=>{
    console.info(userInfo.lang)
  }, [userInfo])


  const langHandler = (lang) => {
    userInfoLangHandler(lang)
    setSiteLang(lang)
  }
  return (
    <div className="App">
      <NavSection langHandler={langHandler} siteLang={siteLang} />
      <Banner siteLang={siteLang} />
      <BookDis siteLang={siteLang} userAuth={userAuth} />
      <Competition siteLang={siteLang} />
      <UserSection userAuth={userAuth} userAuthHandler={userAuthHandler} />
      <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far)