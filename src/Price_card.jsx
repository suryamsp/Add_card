import { useState } from "react";
import { Top_bar } from "./Top_bar";
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client'


const arr=[];

export function Price_card({detail,id}) {
  const [items, setItems] = useState("");
  const [count, setCount] = useState("");
  if(items != ""){
    arr.push(items);
   }

  const addItem = (detail) => {     
    setItems(detail);
      }
  


//   setButton(true);}
  const navigate = useNavigate();

  return (
<div>
  <h2>{count}</h2>
    <div className='container'>
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <div className='content'><h2>{detail.name}</h2></div>
      <div className='content'><p>{detail.rating}</p></div>
      
   
      <div className='content'><p className='discount_price'><s>{detail.dis_price}</s> </p><p>{detail.price}</p></div>
      <div className='button'><button id="btns" className="btn"  onClick={()=>navigate(`/${id}`)}>{detail.btn_name}</button></div>
    </div>
    </div>

  );
}


// function removeDuplicates(arr) {
//   return arr.filter((item,
//       index) => arr.indexOf(item) === index);
     
// }




// let root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Top_bar />)

