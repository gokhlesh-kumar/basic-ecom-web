import React, { useState } from 'react'
import { Grid, Card, CardContent, CardActions, Typography, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch } from 'react-redux';


const ProductsCard = ({products}) => {

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
     
    const dispatch = useDispatch();
  
    const handleOpenPopup = (product) => {
      setSelectedProduct(product);
      setOpenPopup(true);
    };
  
    const handleClosePopup = () => {
      setOpenPopup(false);
    };

  return (

    <>
    
    
    <Grid sx = {{ display: 'flex' }} container spacing={2} rowSpacing={4}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent>
            <img src={product.image} alt={product.title} onClick={()=>handleOpenPopup(product)} style={{ width: '100%', height: '50vh' }} />
              <Typography variant="h6" gutterBottom>
                {product.title.length > 25 ? product.title.substr(0,25) : product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Button variant="contained" color="primary" onClick={()=>dispatch({ type: 'ADDITEM' , payload: product})}>
                  Add to Cart
                </Button>
              </Box>
              {/* <Button variant="outlined" color="secondary">
                Remove
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
      ))}

        <Dialog open={openPopup} onClose={handleClosePopup} maxWidth="lg">
            {selectedProduct && (
            <Box display="flex" component="span" sx={{ width:'50vw', p: 2, border: '2px dashed grey' }} >
                <Close sx={{position:'absolute', right:'20px'}} onClick={handleClosePopup} />
                  <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{ width: '400px', objectFit:'scale-down', maxHeight: 400 }}
                  />
                <Box p={2}>
                <DialogTitle>{selectedProduct.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{selectedProduct.description}</DialogContentText>
                    <br/>
                    <Typography variant="h5" color="textPrimary">
                        Price: ${selectedProduct.price}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={()=>dispatch({ type: 'ADDITEM' , payload: selectedProduct})}>
                    Add to Cart
                    </Button>
                </DialogActions>
                </Box>
            </Box>
            )}
        </Dialog>
    </Grid>
    </>
  )
}

export default ProductsCard
