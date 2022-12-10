import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/action/Action';
import CategorisedProduct from './CategorisedProduct';

export default function JewellerySection() {

    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(fetchProducts("jewelery"));
    }, []);
    return(
        <CategorisedProduct/>
    );
}