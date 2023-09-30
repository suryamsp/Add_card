
import { useEffect, useState } from 'react';



export function Price_card({pricelist,addItem,list}) {

  function isItemInCart(item) {
    return list.some((cartItem) => cartItem.id === item.id);
  }

  return (
<div className='main_con'>
{pricelist.map((detail, index) => ( <div key={index} className='container'>
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <div className='content'><h2>{detail.name}</h2></div>
      <div className='content'><p>{detail.rating}</p></div>
      <div className='content'><p className='discount_price'><s>{detail.dis_price}</s> </p><p>{detail.price}</p></div>
      <div className='button'><button  className="btn" onClick={(e)=>{addItem(detail,e)}} disabled={isItemInCart(detail)}>{detail.btn_name}</button></div>
    </div> ))}

    
    </div>

  );
}

