import React from "react";
import Product from '../product/Product.css'

import {useSelector} from "react-redux";

export default function CategorizedProducts(){

    const products= useSelector((state) => state.Reducer.products);

    return(
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-md-12 col-10 padding-cards my-5">
                        <div className="row">
                            {products.map((product, id) => (
                                <div className="col-md-3 col-3"  key={id}>
                                    <div className="card">
                                        <img
                                            className="card-img-top"
                                            src={product.image}
                                            alt="Card image cap"
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{product.title}</h6>
                                            <div className={"row"}>
                                                <div className="col-md-6 col-6">
                                                    <p className="card-text">
                                                        Price : <span>{product.price}</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <p className="card-text">
                                                        Rating : <span>{product.rating.rate}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button type="button" className="btn btn-info"> Cart</button>
                                            <button type="button" className="btn btn-light"> View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}