import {createStore} from 'redux';
import Immutable from 'seamless-immutable';
import {
    START_GET_PRODUCTS,
    SUCCES_GET_PRODUCTS,
    ERROR_GET_PRODUCTS,
    START_GET_PRODUCT_DETAILS,
    SUCCES_GET_PRODUCT_DETAILS,
    ERROR_GET_PRODUCT_DETAILS
} from '../actiontypes/index';

const initialState = Immutable({
    loading: false,
    products: [],
    filters: [],
    productDetail: {author: {}, item:{price:{}}}
});

const productsStore = (state = initialState, action) => {
    switch(action.type) {
        case SUCCES_GET_PRODUCTS:
            return state.merge({
                products: action.products,
                filters: action.filters,
                loading: false
            });
        case START_GET_PRODUCTS:
            return state.merge({
                loading: true
            });
        case ERROR_GET_PRODUCTS:
            return state.merge({
                loading: false
            });
        case SUCCES_GET_PRODUCT_DETAILS:
            return state.merge({
                productDetail: action.productDetail,
                loading: false
            });
        case START_GET_PRODUCT_DETAILS:
            return state.merge ({
                loading: true
            });
        case ERROR_GET_PRODUCT_DETAILS:
            return state.merge({
                loading: false
            });
        default:
            return state;
    }
}

const store = createStore(productsStore);

export default store;
