import React from 'react';
import { LOCALES } from '../i18n/locales';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
export const I18nSelect = () => {
let actual="english";
let second="spanish";
  if(localStorage.getItem("language")===LOCALES.SPANISH){
 actual="spanish";
 second="english";}

function changeLocalStorage(){
  if(second==="spanish"){
    localStorage.setItem("language",LOCALES.SPANISH)
  }else{
    localStorage.setItem("language",LOCALES.ENGLISH)
  }
}
const refreshPage = ()=>{
  window.location.reload();
}
  return <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {actual}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"onClick={()=>{changeLocalStorage( )
    refreshPage();
    }}>{second}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
};
