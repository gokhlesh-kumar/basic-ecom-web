import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from "./Redux/Action/Action"
import { Typography, Grid, Card, CardContent, Button } from '@mui/material'


const Cart = () => {
    const state = useSelector((state)=> state.addItems)
    const dispatch = useDispatch()

    console.log(state)

    const handleClose = (item) => {
        console.log("cart = ",item)
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <> 
              <Grid container mt={10} justifyContent="center">
                <Grid item key={cartItem.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ height: '100%' }} sx={{display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'}}>
                <CardContent sx={{flexGrow: 1}}>
                    <img src={cartItem.image} alt={cartItem.title} style={{ width: '100%', height: '50vh' }} />
                    <Typography variant="h5">{cartItem.title}</Typography>
                    <Typography variant="body1">Price: ${cartItem.price}</Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClose(cartItem.id)}
                  >
                    Remove
                  </Button>
                </Card>
              </Grid>
            </Grid>
            </>
        );
    }

    const emptyCart = () => {
        return (
            <div style={{marginTop:'300px'}}>
              <Typography variant="h1" component="h2" sx={{textAlign:'center'}}>
                Your cart is Empty
              </Typography>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            <Grid mt={10}>
              {state.length !== 0 && state.map(cartItems)}
            </Grid>
        </>
    )
}

export default Cart