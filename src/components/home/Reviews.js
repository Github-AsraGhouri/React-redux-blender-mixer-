
import React, { Component } from 'react';

class Reviews extends Component {
    render() {
        let { json } = this.props
        return (
            <div className="container">
                <div className="row reviews">
                    <div className="col-7">
                        <span className="overall-rating">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </span>
                        <span className="overall"> overall</span>
                    </div>
                    <div className="view-reviews col-5">
                        <span className="view-all">View all {json.CustomerReview[0].totalReviews} reviews</span>
                    </div>
                </div>
                <div className=" container pro-con">
                    <div className="row">
                        <div className="col-6">
                            <h2>PRO</h2>
                            <p>most helpful 4-5 start review</p>
                        </div>
                        <div className="col-6">
                            <h2>CON</h2>
                            <p>most helpful 1-2 start review</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <div class="con-rating">
                                <span className={parseInt(json.CustomerReview[0].Pro[0].overallRating) > 0 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Pro[0].overallRating) > 1 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Pro[0].overallRating) > 2 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Pro[0].overallRating) > 3 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Pro[0].overallRating) > 4 ? "active" : ""}>★</span>
                            </div>
                            <h2>{json.CustomerReview[0].Pro[0].title}</h2>
                            <p>{json.CustomerReview[0].Pro[0].review}</p>
                            <p><span className="posted-name">{json.CustomerReview[0].Pro[0].screenName} </span>
                                {json.CustomerReview[0].Pro[0].datePosted}
                            </p>
                        </div>
                        <div className="col-6">
                            <div class="con-rating">
                                <span className={parseInt(json.CustomerReview[0].Con[0].overallRating) > 0 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Con[0].overallRating) > 1 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Con[0].overallRating) > 2 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Con[0].overallRating) > 3 ? "active" : ""}>★</span>
                                <span className={parseInt(json.CustomerReview[0].Con[0].overallRating) > 4 ? "active" : ""}>★</span>
                            </div>
                            <h2>{json.CustomerReview[0].Con[0].title}</h2>
                            <p>{json.CustomerReview[0].Con[0].review}</p>
                            <p><span className="posted-name">{json.CustomerReview[0].Con[0].screenName} </span>
                                {json.CustomerReview[0].Con[0].datePosted}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Reviews;