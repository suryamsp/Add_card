import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Price_card } from './Price_card';
import { Remove_Cart } from './Remove_cart';
import { Route, Routes,Navigate, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';





export function Top_bar() {
const [show,setshow]=useState(true);
const [list,setlist]=useState([]);
const [count,setcount]=useState(0);
const [pricelist,setpricelist]=useState([{
  "id":"1",
  "name": "Fancy Product",
  "price": "$40.00-$80.00",
  "btn_name": "View options"
}, {
  "id":"2",
  "name": "Special item",
  "rating": "⭐⭐⭐⭐⭐",
  "price": "$18.00",
  "dis_price": "$20.00",
  "btn_name": "Add to cart"
}, {
  "id":"3",
  "name": "Sales item",
  "price": "$50.00",
  "dis_price": "$25.00",
  "btn_name": "Add to cart"
}, {
  "id":"4",
  "name": "Popular item",
  "rating": "⭐⭐⭐⭐⭐",
  "price": "$40.00",
  "dis_price": "",
  "btn_name": "Add to cart"
}, {
  "id":"5",
  "name": "Sales item",
  "price": "$50.00",
  "dis_price": "$25.00",
  "btn_name": "Add to cart"
},
{"id":"6",
  "name": "Fancy Product",
  "price": "$120.00-$280.00",
  "btn_name": "View options"
},
{"id":"7",
  "name": "Special item",
  "rating": "⭐⭐⭐⭐⭐",
  "price": "$18.00",
  "dis_price": "$20.00",
  "btn_name": "Add to cart"
},
{
  "id":"8",
  "name": "Popular item",
  "rating": "⭐⭐⭐⭐⭐",
  "price": "$40.00",
  "dis_price": "",
  "btn_name": "Add to cart"
}])



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
 
  function addItem(detail,e)  {     
    if(detail != ""){
 setlist((details)=> [...list,detail]);   

    }
    setcount(list.length+1);
   setshow(false);
  
   }

   const removeItem = (index,data) => {
    const newItems = [...list];
    newItems.splice(index, 1);
    setlist(newItems);
    setcount(list.length-1)
 
    if(list.length == 1){
 setshow(true);

    }}


  return (
   <div>
     <div>

<div className='top_bar'>  
<div className='top_bar_con'>
<h2 style={{ margin: "10px" }}>Add Cart</h2>
  <Button className='button' onClick={()=>navigate('/')}>Home</Button>
  <Button  href="#text-buttons">About</Button>
    <Button
      id='das_btn'

      onClick={handleClick}
    >
      Dashboard
    </Button>
    <Menu
    
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>

</div>
 
  <div className='nav_bar'><button className='Cart_btn' onClick={()=>navigate('/card')} ><ShoppingCartIcon />cart
<button className='count_btn'>{count}</button></button>
</div>      
</div>

<div className='sec_bar'>
  <p className='f_title'>Shop in style</p>
  <p className='se_title'>With this shop hompeage template</p>
</div>
   </div>

<Routes>
  <Route path="/" element={ <Price_card pricelist={pricelist} addItem={addItem}setlist={setlist} list={list}  />}/>
  <Route path="/card" element={show ? <NoRecord /> : <Remove_Cart setlist={setlist} list={list} removeItem={removeItem}   />} />
</Routes>

     
      
    </div>
  );
}


function NoRecord(){
  return(
    <div >
      <img className='norecord' src='https://vinoroc.com/static/app/images/no-record-found.76d6bd93c23b.gif'/>
    </div>
  );
}