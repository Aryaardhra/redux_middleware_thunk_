import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../redux/action/Action";
import CategorisedProduct from "./CategorisedProduct";

export default function Electronics(){
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(fetchProducts("electronics"));
    }, []);
    return(
        <CategorisedProduct/>
    );
}
