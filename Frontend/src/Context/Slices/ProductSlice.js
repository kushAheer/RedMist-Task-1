import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDetails: localStorage.getItem('productDetails') ? JSON.parse(localStorage.getItem('productDetails')) : {},
        productGeneralInfo: localStorage.getItem('productGeneralInfo') ? JSON.parse(localStorage.getItem('productGeneralInfo')) : {},
        productCatalogInfo: localStorage.getItem('productCatalogInfo') ? JSON.parse(localStorage.getItem('productCatalogInfo')) : {},
        productAdditionalInfo: localStorage.getItem('productAdditionalInfo') ? JSON.parse(localStorage.getItem('productAdditionalInfo')) : {},
        productMediaInfo: localStorage.getItem('productMediaInfo') ? JSON.parse(localStorage.getItem('productMediaInfo')) : {},
        
    },

    reducers: {
        setProductDetails(state, action) {
            state.productDetails = action.payload;
            localStorage.setItem('productDetails', JSON.stringify(action.payload));
        },
        setProductGeneralInfo(state, action) {
            state.productGeneralInfo = action.payload;
            localStorage.setItem('productGeneralInfo', JSON.stringify(action.payload));
        },
        setProductCatalogInfo(state, action) {
            state.productCatalogInfo = action.payload;
            localStorage.setItem('productCatalogInfo', JSON.stringify(action.payload));
        },
        setProductAdditionalInfo(state, action) {
            state.productAdditionalInfo = action.payload;
            localStorage.setItem('productAdditionalInfo', JSON.stringify(action.payload));

        },
        setProductMediaInfo(state, action) {
            state.productMediaInfo = action.payload;
            localStorage.setItem('productMediaInfo', JSON.stringify(action.payload));
        },
        clearProductDetails(state) {
            state.productDetails = {};
            state.productGeneralInfo = {};
            state.productCatalogInfo = {};
            state.productAdditionalInfo = {};
            state.productMediaInfo = {};

            localStorage.removeItem('productDetails');
            localStorage.removeItem('productGeneralInfo');
            localStorage.removeItem('productCatalogInfo');
            localStorage.removeItem('productAdditionalInfo');
            localStorage.removeItem('productMediaInfo');

        },
        
    }
});

export const { setProductDetails, setProductGeneralInfo, setProductCatalogInfo, setProductAdditionalInfo, setProductMediaInfo, clearProductDetails } = productSlice.actions;

export default productSlice;

