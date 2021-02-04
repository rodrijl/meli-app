import {getProducts, getProductDetail} from './actions';
import {
    START_GET_PRODUCTS,
    SUCCES_GET_PRODUCTS,
    START_GET_PRODUCT_DETAILS,
    SUCCES_GET_PRODUCT_DETAILS,
} from '../actiontypes/index';

describe('actions', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('getProducts', () => {
        it('should call dispatch with SUCCES_GET_PRODUCTS type', async () => {
            fetch.mockResponseOnce(JSON.stringify({results:[{name: 'Puerta Exterior Doble Chapa'}]}));
    
            const expectedStartAction = {
                type: START_GET_PRODUCTS
            }
            const expectedSuccessAction = {
                type: SUCCES_GET_PRODUCTS,
                products: [{name: 'Puerta Exterior Doble Chapa'}],
                filters: []
            }
            await getProducts(mockDispatch, 'Puerta');

            expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLA/search?q=Puerta');
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);
            
        })
    });

    describe('getProductDetail', () => {
        it('should dipatch SUCCES_GET_PRODUCT_DETAILS', async () => {
            fetch.mockResponseOnce(JSON.stringify({name: 'Puerta Exterior Doble Chapa'}));
    
            const expectedStartAction = {
                type: START_GET_PRODUCT_DETAILS
            }
            const expectedSuccessAction = {
                type: SUCCES_GET_PRODUCT_DETAILS,
                productDetail: {name: 'Puerta Exterior Doble Chapa'},
            }
            await getProductDetail(mockDispatch, 'MLA883189865');

            expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLA883189865');
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);
        });
    });
});
