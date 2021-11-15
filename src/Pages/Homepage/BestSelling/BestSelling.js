import React, { useState, useEffect } from 'react';

const BestSelling = () => {

    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {

                setBestSelling((data.slice(0, 6)))
            });
    }, [])
    return (
        <div className="container">
            <h1 className="my-5 fw-bolder my-5">Best Selling <span className="text-warning"> Phone</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    bestSelling.map(sell =>
                        <div className="col">
                            <div className="card">
                                <img src={sell.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title fw-bolder">{sell.name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestSelling;