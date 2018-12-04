import { GET_PRODUCT_DETAIL } from './../constants'
import { Observable } from 'rxjs/Rx';
import { productAction } from './../actions/index'
import { HttpService } from '../../services/http';

export default class productEpic {

    static getProductDetail = (action$) =>
        action$.ofType(GET_PRODUCT_DETAIL)
            .switchMap(({ payload }) => {
                const getJsonUrl = 'https://nonchalant-soprano.glitch.me/getProductDetail'
                return HttpService.get(getJsonUrl)
                    .switchMap((response) => {
                        debugger
                        if (response.status === 200) {
                            return Observable.of(
                                productAction.getProductDetailSuccess(response.response)
                            )
                        }
                    }).catch((err) => {
                        return Observable.of(productAction.getProductDetailFailure(`Error in Getting Permissions! ${err}`))
                    })
            })
}