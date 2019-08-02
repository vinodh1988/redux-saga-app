import {OfferReducer, ReviewReducer} from '../reducers/allreducers';
import { combineReducers, bindActionCreators } from 'redux';
import {Offer} from '../../Components/Offer';
import {Review} from '../../Components/Review'
import {connect} from 'react-redux';
import {OfferAction} from '../actions/offeraction';

export const state=combineReducers({
    offerState: OfferReducer ,
    reviewState: ReviewReducer
});

let  mapStateToOfferProps=(state)=>{
    
    return {offerMessage:state.offerState.offer.message,
        code:state.offerState.offer.code};
}

let mapActionToOfferProps=(dispatch)=>{
    return bindActionCreators({otheroffers:OfferAction},dispatch);
}

let mapStateToReviewProps=(state)=>{
    return {reviews: state.reviewState.reviews }
}

export const OfferComponent=connect(mapStateToOfferProps, mapActionToOfferProps)(Offer);
export const Reviews=connect(mapStateToReviewProps,null)(Review);