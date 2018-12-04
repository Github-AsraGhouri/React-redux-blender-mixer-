import {
    GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_DETAIL_FAILURE
} from './../constants'

const initialState = {
    productsDetail: null,
    productsDetailLoader: false,
    productsDetailError: null
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCT_DETAIL':
            return {
                productsDetail: null,
                productsDetailLoader: true,
                productsDetailError: null
            }

        case 'GET_PRODUCT_DETAIL_SUCCESS':
            return {
                productsDetail: action.payload,
                productsDetailLoader: false,
                productsDetailError: null
            }

        case 'GET_PRODUCT_DETAIL_FAILURE':
            return {
                productsDetail: null,
                productsDetailLoader: false,
                productsDetailError: action.payload
            }

        default:
            return state
    }

}