import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            // fetch('./products.json')
            // fetch('https://aqueous-reef-70969.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <div className="container bg-light">
            <h1 className="my-5 fw-bolder my-5">New <span className="text-warning"> Arrived</span></h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;