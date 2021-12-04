import './App.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Report } from './pages/Report';
import { NavBar } from './components/NavBar';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import messages from './i18n/messages';


function App() {
  let local="";
  if(localStorage.getItem("language")==="null"){
    console.log("entra al ifaaaaaaaaaaaaaaaaaaaaaa")
    localStorage.setItem("language",LOCALES.SPANISH);
    local=LOCALES.SPANISH;
    
  }else{
    local=localStorage.getItem("language");
  }
 
  const [searchState, setSearchState] = useState({ searchKey: '' });
  const [language, setLanguage] = useState(local);

  
  
 console.log("lenguaje "+language);

  const setSearchkey = (query) => {
    setSearchState({ searchKey: query });
  localStorage.setItem("Name",query)
   
  };


  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <header>
        <NavBar onSearchKeyChange={setSearchkey} />
      </header>
      <main>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home searchKey={searchState.searchKey} />}
          />
          <Route exact path='/report' element={<Report />} />
        </Routes>
      </main>
    </IntlProvider>
  );
}

export default App;
