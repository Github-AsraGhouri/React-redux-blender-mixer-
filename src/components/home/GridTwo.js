import React, { Component } from 'react';

class GridTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    render() {
        let { json } = this.props
        const regex = /(<([^>]+)>)/ig;
        return (
            <div className="container">
                <section>
                    <p>
                        <span className="price">
                            {json.Offers[0].OfferPrice[0].formattedPriceValue}
                        </span>
                        {json.Offers[0].OfferPrice[0].priceQualifier}
                    </p>
                    <div className="benefits">
                        <ul className="fa-ul">
                            {
                                json.Promotions && json.Promotions.map((promotion) => {
                                    return (
                                        <li><span class="fa-li" ><i class="fa fa-tag"></i></span>{promotion.Description ? promotion.Description[0].shortDescription : ''}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="quantity">
                        <span> quantity: </span>
                        <span className="round-buttons pull-right">
                            <i style={{ cursor: 'pointer' }} onClick={() => this.state.quantity > 1 ? this.setState({ quantity: this.state.quantity - 1 }) : ''} className="fa fa-minus-circle" aria-hidden="true"></i>
                            <span className="increament">{this.state.quantity}</span>
                            <i style={{ cursor: 'pointer' }} onClick={() => this.setState({ quantity: this.state.quantity + 1 })} className="fa fa-plus-circle" aria-hidden="true"></i>
                        </span>
                    </div>
                </section>
                <section className="container shop-section">
                    <div className="row">
                        <div className="col-6">
                            {
                                parseInt(json.purchasingChannelCode) === 0 || parseInt(json.purchasingChannelCode) === 2 ?
                                    <button type="button" class="btn btn-secondary btn-lg btn-block" id="pickup-btn">PICK UP IN STORE</button>
                                    : ''
                            }
                            <p className="find-coach"> find in store</p>
                        </div>
                        <div className="col-6">
                            {
                                parseInt(json.purchasingChannelCode) === 0 || parseInt(json.purchasingChannelCode) === 1 ?
                                    <button type="button" class="btn btn-secondary btn-lg btn-block" id="cart-btn">ADD TO CART</button>
                                    : ''
                            }
                        </div>
                    </div>
                </section>
                <section className="return-section">
                    <div className="row">
                        <span className="return-title col-2">return</span>
                        <span className="return-details col-10"> This item must be returned within 30 days of the ship data. See return policy for details.
                          Prices, promotions, styles and availibility may vary by store and online.
                        </span>
                    </div>
                    <div className="row policy-details">
                        <div className="col-4">
                            <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">ADD TO REGISTRY</button>
                        </div>
                        <div className="col-4">
                            <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">ADD TO LIST</button>
                        </div>
                        <div className="col-4">
                            <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">SHARE</button>
                        </div>
                    </div>
                </section>
                <section className="product-highlights">
                    <div className="row">
                        <span className="col-12">
                            <h1 className="highlights-heading">products highlights</h1>
                        </span>
                    </div>
                    <ul className="product-list">
                        {
                            json.ItemDescription[0].features && json.ItemDescription[0].features.map((feature) => {
                                return <li>{feature.replace(regex, '')}</li>
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

export default GridTwo;