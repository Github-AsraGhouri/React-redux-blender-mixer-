
import {
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILURE,
} from './../constants'

export class productAction {

    static getProductDetail() {
        return {
            type: GET_PRODUCT_DETAIL
        }
    }

    static getProductDetailSuccess(payload) {
        return {
            type: GET_PRODUCT_DETAIL_SUCCESS,
            payload
        }
    }

    static getProductDetailFailure(error) {
        return {
            type: GET_PRODUCT_DETAIL_FAILURE,
            error
        }
    }
}