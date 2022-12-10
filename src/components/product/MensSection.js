import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/action/Action';
import CategorisedProduct from './CategorisedProduct';

export default function MensSection() {
  
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(fetchProducts("men's clothing"));
    }, []);
    return(
        <CategorisedProduct/>
    )
}
