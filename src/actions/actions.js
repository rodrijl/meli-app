import {
    START_GET_PRODUCTS,
    SUCCES_GET_PRODUCTS,
    ERROR_GET_PRODUCTS,
    START_GET_PRODUCT_DETAILS,
    SUCCES_GET_PRODUCT_DETAILS,
    ERROR_GET_PRODUCT_DETAILS
} from '../actiontypes/index';

const url = 'http://localhost:8080';

const getProducts = async (dispatch, searchText) => {
    try{
        dispatch({
            type: START_GET_PRODUCTS
        });
        const result = await fetch(`${url}/items?q=${searchText}`);
        const response = await result.json();

        // always only save first 4 elements on the store
        const results = response.data.products.slice(0, 4);
        let filters = response.data.categories || [];

        dispatch({
            type: SUCCES_GET_PRODUCTS,
            products: results,
            filters
        });
    } catch(err) {
        dispatch({
            type: ERROR_GET_PRODUCTS
        });
        throw err;
    };
}

const getProductDetail = async (dispatch, productId) => {
    try{
        dispatch({
            type: START_GET_PRODUCT_DETAILS,
        });
        const result = await fetch(`${url}/items/${productId}`);
        const response = await result.json();

        debugger;
        
        dispatch({
            type: SUCCES_GET_PRODUCT_DETAILS,
            productDetail: response.data,
            filters: response.data.categories
        });
    } catch(err){
        dispatch({
            type: ERROR_GET_PRODUCT_DETAILS
        });
    };    
}

export {getProducts, getProductDetail};
