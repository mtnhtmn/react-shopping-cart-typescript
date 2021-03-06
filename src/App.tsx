import React from 'react';
import {useState} from "react";
import {useQuery} from "react-query";
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from '@material-ui/core/Badge'
import {Wrapper} from './App.styles'
import {getProducts} from "./services/api";
import Item from "./Item/Item";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price:  number;
    title: string;
    amount: number;
}




const App = () => {

    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
    console.log(data)

    const getTotalItems = () => null

    const handleAddToCart = (clickedItem: CartItemType) => null

    const handleRemoveFromCart = () => null

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong</div>

    return (
        <Wrapper>
          <Grid container spacing={3}>
              {data?.map(item => (
                  <Grid item key={item.id} xs={12} sm={4}>
                      <Item item={item} handleAddToCart={handleAddToCart}/>
                  </Grid>
              ))}

          </Grid>

        </Wrapper>
    );
};

export default App;