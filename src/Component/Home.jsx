import { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { Container, Button, ButtonGroup } from '@mui/material';

const Home = () => {

  const [products, setProducts] = useState([]);
  const[filter, setFilter] = useState([]);

  useEffect(() =>{
      const fetchProducts = async() =>{
          const response = await fetch('https://fakestoreapi.com/products');
          const json = await response.json();
          setProducts(json);
          setFilter(json);
      }

      fetchProducts();
  },[])

  const selectCategory = (val) =>{
      const data = products.filter((element) => element.category === val);
      setFilter(data);
  }

  return (
   
    <Container sx={{ marginTop:'20vh', marginBottom:'15vh', position:'relative' }}>
      <div>
        <ButtonGroup variant="contained"  aria-label="outlined primary button group">
          <Button onClick={() => setFilter(products)} >All</Button>
          <Button onClick={() => selectCategory("men's clothing")} >Mens</Button>
          <Button onClick={() =>selectCategory("women's clothing")} >Womens</Button>
          <Button onClick={() =>selectCategory('jewelery')} >Jewelery</Button>
        </ButtonGroup>
      </div >

      <div style={{marginTop:'40px'}}>
        <ProductsCard products={filter} />
      </div>
    </Container>
  )
}

export default Home
