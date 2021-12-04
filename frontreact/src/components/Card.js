import React from 'react';

/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;
  let color=""
  let cursor=""
  if(isActive==="false"){
    color="gray"
    cursor="default"

  }
  return (
    <div style={{background:color, width: "18rem", border: "solid", borderRadius:"2rem", borderColor:"lightgray"}}>
      <div className='card-header'  >
        <p className='card-title'>{name}</p>
        <span className='material-icons card-favorite' style={{cursor: cursor}} >favorite_border</span>
      </div>
      <img className='card-img' src={picture} alt={name} />
      <div className='card-bottom'>
        <p className='price'>$ {price}</p>
      </div>
    </div>
  );
};
