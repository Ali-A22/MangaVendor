import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Manga from './pages/Manga';
import { books } from './data';
import Bookinfo from './pages/BookInfo';
import Cart from './pages/Cart';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id
      ? {
        ...item,
        quantity: +quantity,
      }
      : item
    )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))

  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity
    });
    return counter;
  }

  
  useEffect(() => {
    console.log(cart)
  }, [cart]);

 
  
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect (() => {
    dispatch(getPosts());
  }, [dispatch]);

  <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image}  alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  

  

  

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path='/' exact component={Home} />
        <Route path='/manga'
          exact render={() => <Manga books={books} />} />
        <Route
          path='/manga/:id'
          render={() => <Bookinfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path='/cart'
          render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          <Route path= '/posts' exact component={Posts} />
          <Route path= '/posts' exact component={Form} />
        <Footer />
      </div>
    </Router>
  );

  
}


export default App;
