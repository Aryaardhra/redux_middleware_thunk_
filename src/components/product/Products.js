import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

function Products(){
        return (
            <>
            < nav className="nav-item nav-link my-4 mx-4">

            <button type="button " 
              className="btn btn-outline-dark mx-2">
               <NavLink to ='womens'> Womens Section</NavLink>
            </button>
            <button type="button" 
              className="btn btn-outline-dark mx-2">
                <NavLink to = 'mens'> Mens Section</NavLink>
            </button>
             <button type="button" 
              className="btn btn-outline-dark mx-2 ">
                <NavLink to ='jewelery'> jewellery Section</NavLink>
             </button>
             <button type="button" 
              className="btn btn-outline-dark mx-2">
                <NavLink to ='electronics'> Electronics Section</NavLink>
             </button>
            </nav>
            <Outlet/>
                </>

        );
}

export default Products;
