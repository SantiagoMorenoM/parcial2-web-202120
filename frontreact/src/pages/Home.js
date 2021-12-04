import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from "react-intl";
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

 
  async function fetchStuff(){
  
    fetch(
      '/api/products'
       )
      .then((resp) => resp.json())
      .then((data) => {
        
          let temp= [];
          data.forEach(element => {
            if(element.name.toLowerCase().includes(searchKey.toLowerCase())){
              const product= {
                product:element
              }
              
              temp.push(product.product)
            }
          });
       
     
          setProducts(temp);
      });
  }
  useEffect( () => {
        
    fetchStuff();
         
       

}, [searchKey]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery"/></h1>
        <div className='home-card'>
        {}
        {products.map((e, i) => (
            <Card  key={i} name={e.name} picture={e.picture} price={e.price} isActive={e.isActive}  />
          ))}
        </div>
      </div>
    </section>
  );
};
