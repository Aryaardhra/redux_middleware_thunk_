import ActionTypes from "../constant/ActionTypes";
import FakeStoreAPI from "../../apis/FakeStoreAPI";
import Products from "../../components/product/Products";

export const fetchProducts = ( category) => {
    return async function (dispatch){
        const response = await FakeStoreAPI.get("/products");
        const products = response.data;
        const CategorisedProduct= products.filter(product => product.category === category);
        dispatch(setProducts( CategorisedProduct));
    }

}

export const setProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}