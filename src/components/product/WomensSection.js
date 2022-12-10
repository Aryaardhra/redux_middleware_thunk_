import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/action/Action';
import CategorisedProduct from './CategorisedProduct'

export default function WomensSection() {

    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(fetchProducts("women's clothing"));
    }, []);
    return(
        <CategorisedProduct/>
    );
}
