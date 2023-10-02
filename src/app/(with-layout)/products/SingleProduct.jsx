import React from 'react';

const SingleProduct = ({product}) => {
    const {id, title} = product;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default SingleProduct;