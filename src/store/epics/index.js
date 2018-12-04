import { combineEpics } from 'redux-observable';
import productEpic from './productEpic'

const rootEpic = combineEpics(
    productEpic.getProductDetail
);

export default rootEpic;