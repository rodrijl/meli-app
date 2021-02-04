import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import Loader from './Loader';
import { getProductDetail } from '../actions/actions';

import './styles/ProductDetails.scss';

const ProductDetails = (props) => {

    const productDetail = useSelector(store => store.productDetail);
    const filters = useSelector(store => store.filters);
    const loading = useSelector(store => store.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        getProductDetail(dispatch, props.match.params.id);
    }, []);

    let loader, product;
    if (loading) {
        loader = <Loader />;
    } else {
        const {item: {price: {currency, amount, decimals}, condition, sold_quantity, title, picture, description}} = productDetail;

        product = (
            <div>
                <Breadcrumb filters={filters}/>
                <section className="product-info">
                    <div className="information">
                        <img src={picture} alt="Product detail image"/>
                        <div className="details">
                            <h5 className="condition">{`${condition} - ${sold_quantity} vendidos`}</h5>
                            <h2 className="title">{title}</h2>
                            <h1 className="price">{`${currency} ${amount}`}<sup>{decimals}</sup></h1>
                            <button className="btn">Comprar</button>
                        </div>
                    </div>
                    <div className="description">
                        <span>Descripción del producto</span>
                        <p>{description}</p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="product-details">
            {loader}
            {product}
        </div>
    )
}

export default withRouter(ProductDetails);
export {ProductDetails};
