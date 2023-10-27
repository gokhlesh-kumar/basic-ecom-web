import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Badge } from '@mui/material';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const [search, setSearch] = useState("");

  const state = useSelector((state) => state.addItems)

  const searchProduct = (e) =>{
      setSearch(e.target.value);
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecom Website
        </Typography>
          <div style={{display:'flex', color:'white', border:'1px'}}>
            <div>
              <IconButton>
                <SearchIcon sx={{color:'white'}}/>
              </IconButton>
            </div>
            <InputBase
              placeholder="Search…"
              value={search}
              onChange={searchProduct}
              inputProps={{ 'aria-label': 'search' }}
              style={{color:'white'}}
            />
          </div>
    
        <Button color="inherit" component={Link} to="/">Home</Button>
        {/* <Button color="inherit" component={Link} to="about">About</Button> */}
        <IconButton color="inherit" component={Link} to="cart">
          <Badge color="secondary" badgeContent={state.length}>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
