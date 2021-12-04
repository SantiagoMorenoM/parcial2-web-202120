import React, { useState, useEffect } from 'react';
import { Chart } from '../components/Chart';
export const Report = () => {
  const [products, setProducts] = useState([]);

  async function fetchStuff(){
    fetch(
      '/api/products'
       )
      .then((resp) => resp.json())
      .then((data) => {

          setProducts(data);
      });
  }
  useEffect( () => {
        
    fetchStuff();
         
       

}, []);
  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
      <Chart data={products}/>
      </div>
    </section>
  );
};
