import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Price_card_list } from './Price_card_list';
import { Price_card } from './Price_card';
import { Remove_Cart } from './Remove_cart';
import { Route, Routes,Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';


export function Top_bar({id,arr}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const navigate = useNavigate();
 

  return (
    <div>

      <div className='top_bar'>

    
        <h2 style={{ margin: "10px" }}>Add Cart</h2>
        <Button className='button' href="#text-buttons">Home</Button>
        <Button className='button' href="#text-buttons">About</Button>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu
            id="basic-menu"
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
       
        <div className='cart_btn'><button className='Cart_btn' ><ShoppingCartIcon />cart</button></div>
        
      </div>

      <div className='sec_bar'>
        <p className='f_title'>Shop in style</p>
        <p className='se_title'>With this shop hompeage template</p>
      </div>

<Routes>
  <Route path="/" element={ <Price_card_list />}/>
  <Route path="/:url" element={<Remove_Cart />} />
</Routes>

     
      
    </div>
  );
}
