import React from 'react';
import {withRouter} from 'react-router-dom';
import './styles/Product.scss';

const Product = ({history, product, last}) => {

    const {item: {price: {currency, amount}, title, picture, city}, _id} = product;

    const handleProductDetail = () => history.push(`/items/${_id}`);

    let line;
    if (!last) {
        line = <hr className="division"/>;
    }

    return (
        <div className="product">
            <section className="product-item" onClick={handleProductDetail}>
                <img src={picture} height="180" width="180" />
                <div className="product-info">
                    <h3>{`${currency} ${amount}`}</h3>
                    <p>{title}</p>
                </div>
                <small>{city}</small>
            </section>
            {line}
        </div>
    )
};

export default withRouter(Product);
export {Product}
