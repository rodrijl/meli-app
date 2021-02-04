import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { getProducts } from '../actions/actions';
import Breadcrumb from './Breadcrumb';
import Product from './Product';
import Loader from './Loader';
import Message from './Message';

import './styles/Products.scss';

const Products = () => {
    const location = useLocation();
    const {search} = location;
    const values = queryString.parse(search)

    const products = useSelector(store => store.products);
    const filters = useSelector(store => store.filters);
    const loading = useSelector(store => store.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(dispatch, values.search);
    }, [location]);

    let loader, noItemsMessage, productsList;
    if (loading) {
        loader = <Loader/>;
    } else {
        if (products.length) {
            productsList = (
                <section className="list">
                    {products.map((product, index) => <Product product={product} key={product._id} last={index === products.length - 1} />)}
                </section>
            );
        } else {
            noItemsMessage = <Message text="No existen productos que coincidan con la búsqueda" />;
        }
    }

    return (
        <div className="products">
            <Breadcrumb filters={filters}/>
            {loader}
            {noItemsMessage}
            {productsList}
        </div>
    )
}

export default Products;
