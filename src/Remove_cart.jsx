import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

let array=[];
let ss=[];
export function Remove_Cart() {
  const [count, setcount] = useState([]);


  const datas = [{
    "id":"1",
    "name": "Fancy Product",
    "price": "$40.00-$80.00",
    "btn_name": "View options",
  }, {
    "id":"2",
    "name": "Special item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$18.00",
    "dis_price": "$20.00",
    "btn_name": "Add to cart",
  }, {
    "id":"3",
    "name": "Sales item",
    "price": "$50.00",
    "dis_price": "$25.00",
    "btn_name": "Add to cart",
  }, {
    "id":"4",
    "name": "Popular item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$40.00",
    "dis_price": "",
    "btn_name": "Add to cart",
  }, {
    "id":"5",
    "name": "Sales item",
    "price": "$50.00",
    "dis_price": "$25.00",
    "btn_name": "Add to cart",
  },
  {"id":"6",
    "name": "Fancy Product",
    "price": "$120.00-$280.00",
    "btn_name": "View options",
  },
  {"id":"7",
    "name": "Special item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$18.00",
    "dis_price": "$20.00",
    "btn_name": "Add to cart",
  },
  {
    "id":"8",
    "name": "Popular item",
    "rating": "⭐⭐⭐⭐⭐",
    "price": "$40.00",
    "dis_price": "",
    "btn_name": "Add to cart",
  }
  ];



  const { url } = useParams();
  var details=datas[url-1];
    // setcount(details); 
    if(details != ""){
      array.push(details);
     }

  return (
    <div >  
  
  {array.map((data,index)=>  <div key={index} className='small_container'>
    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
    <div className='content1'><h2  className='content1'>{data.name}</h2>
    <p className='content1'>{data.rating}</p>    
    <p className='content1'>{data.price}</p>
   </div>
    <div className='button'><button id="btns" className="remove_btn" >Remove</button></div>
  </div>)}
    </div>

  );
}
