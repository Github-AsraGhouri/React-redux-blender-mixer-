import React, { Component } from 'react';
import './index.css'
import Crousel from './Crousel'
import Reviews from './Reviews'
import GridTwo from './GridTwo'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: this.props.productsDetail ? this.props.productsDetail.CatalogEntryView[0] : null
        }
        this.props.getProductDetail()
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.productsDetail !== nextProps.productsDetail && nextProps.productsDetail) {
            this.setState({ json: nextProps.productsDetail.CatalogEntryView[0] })
        }
    }

    render() {
        return (
            <div className="landing">
                {
                    this.state.json ?
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Crousel json={this.state.json} />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <GridTwo json={this.state.json} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Reviews json={this.state.json} />
                                </div>
                            </div>
                        </div>
                        : '...loading'
                }
            </div>
        );
    }
}

Home.propTypes = {
    productsDetail: PropTypes.object.isRequired,
    productsDetailLoader: PropTypes.bool.isRequired,
    productsDetailError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    const { productReducer: { productsDetail, productsDetailLoader, productsDetailError } } = state;
    return {
        productsDetail, productsDetailLoader, productsDetailError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: () => dispatch(productAction.getProductDetail()),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Home));