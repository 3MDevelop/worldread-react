import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavSection from './components/NavSection';
import Banner from './components/Banner';
import BookDis from './components/BookDis';
import Footer from './components/Footer';
import Competition from './components/Competition'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function App() {
  const [siteLang, setSiteLang] = useState('ar');
  const [userToken, setUserToken] = useState('');
  const [userAuth, setUserAuth] = useState(false);
  const [userData, setUserData] = useState([]);
  const [showCookieBox, setShowCookieBox] = useState(false)

  const siteLangHandler = (nLang) => {
    document.cookie.split(';').forEach(cookie => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('siteLang=')) {
        document.cookie = `siteLang=${nLang}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
      }
    })
    setSiteLang(nLang);
  };

  const userTokenHandler = (nToken) => {
    document.cookie.split(';').forEach(cookie => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('userToken=')) {
        document.cookie = `userToken=${userToken}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
        /* userAuthHandler(true) */
      }
    });
    setUserToken(nToken);
  };

  const cookieBoxHandler = (newSit) => {
    setShowCookieBox(newSit)
  }

  const userDataHandler = (newUserData) => {
    setUserData(newUserData)
  }

  const cookieHandler = () => {
    document.cookie = `siteLang=${siteLang}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
    document.cookie = `userToken=${userToken}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
  }

  const userAuthHandler = (newSit) => {
    setUserAuth(newSit)
  }

  useEffect(() => {
    const cookies = document.cookie.split(';');
    let siteLangValue;
    let userTokenValue;
    cookies.forEach(cookie => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('siteLang=')) {
        siteLangValue = trimmedCookie.substring('siteLang='.length);
      } else if (trimmedCookie.startsWith('userToken=')) {
        userTokenValue = trimmedCookie.substring('userToken='.length);
      }
    });
    if (siteLangValue === undefined) {
      siteLangHandler('ar')
      const showCookieBoxTimeout = setTimeout(() => {
        cookieBoxHandler(true);
        clearTimeout(showCookieBoxTimeout);
      }, 1500);
    } else {
      siteLangHandler(siteLangValue)
      if (userTokenValue !== '') {
        fetch("https://api.worldread.net/v1/list/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userToken: userTokenValue
          }),
        })
          .then(response => {
            if (!response.ok) {
              document.cookie = 'userToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              userAuthHandler(false)
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            userDataHandler(data)
            userAuthHandler(true)
            userTokenHandler(userTokenValue)
          })
          .catch(error => {
            console.error("Fetch error:", error);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <NavSection
        siteLang={siteLang}
        siteLangHandler={siteLangHandler}
        userToken={userToken}
        userTokenHandler={userTokenHandler}
        userAuth={userAuth}
        userAuthHandler={userAuthHandler}
        showCookieBox={showCookieBox}
        setShowCookieBox={setShowCookieBox}
        cookieHandler={cookieHandler}
        userData={userData}
        setUserData={setUserData}
      />
      <Banner siteLang={siteLang} />
      <BookDis siteLang={siteLang} userAuth={siteLang} />
      <Competition siteLang={siteLang} />
      <Footer />
    </div>
  );
}

export default App;
