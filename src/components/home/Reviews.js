
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
                        <span className="view-all">View all {this.props.totalReviews} reviews</span>
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
                                <span className={parseInt(this.props.ProOverallRating) > 0 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ProOverallRating) > 1 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ProOverallRating) > 2 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ProOverallRating) > 3 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ProOverallRating) > 4 ? "active" : ""}>★</span>
                            </div>
                            <h2>{this.props.ProTitle}</h2>
                            <p>{this.props.ProReview}</p>
                            <p><span className="posted-name">{this.props.ProScreenName} </span>
                                {this.props.ProDatePosted}
                            </p>
                        </div>
                        <div className="col-6">
                            <div class="con-rating">
                                <span className={parseInt(this.props.ConOverallRating) > 0 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ConOverallRating) > 1 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ConOverallRating) > 2 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ConOverallRating) > 3 ? "active" : ""}>★</span>
                                <span className={parseInt(this.props.ConOverallRating) > 4 ? "active" : ""}>★</span>
                            </div>
                            <h2>{this.props.ConTitle}</h2>
                            <p>{this.props.ConReview}</p>
                            <p><span className="posted-name">{this.props.ConScreenName} </span>
                                {this.props.ConDatePosted}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Reviews;