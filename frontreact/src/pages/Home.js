import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from "react-intl";
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  let a = localStorage.getItem("Name");
  if(a==null){
    a="";
  }
  console.log(a);
  async function fetchStuff(){
    console.log("Fetching")
    fetch(
      '/api/products'
       )
      .then((resp) => resp.json())
      .then((data) => {
          console.log('Products', data);
          let temp= [];
          products.forEach(element => {
            if(element.contains(a)){
              temp.append(element)
            }
          });
          setProducts(products);
      });
  }
  useEffect( () => {
        
    fetchStuff();
         
       

}, []);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery"/></h1>
        <div className='home-card'>
        {console.log("Cards")}
        {products.map((e, i) => (
            <Card  name={e.name} picture={e.picture} price={e.price} isActive={e.isActive}  />
          ))}
        </div>
      </div>
    </section>
  );
};
