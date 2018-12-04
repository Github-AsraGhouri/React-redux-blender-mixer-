import React, { Component } from 'react';
import './index.css'
import jsonResponse from './../../assets/item-data';
import Crousel from './Crousel'
import Reviews from './Reviews'
import GridTwo from './GridTwo'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productAction } from './../../store/actions'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: jsonResponse.CatalogEntryView[0]
        }
        console.log(jsonResponse)
    }

    componentWillMount(){
        // this.props.getProductDetail()
    }

    render() {
        return (
            <div className="landing">
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
            </div>
        );
    }
}

Home.propTypes = {
    productsDetail: PropTypes.object.isRequired,
    productsDetailLoader: PropTypes.bool.isRequired,
    productsDetailError: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    productsDetail: state.productsDetail,
    productsDetailLoader: state.productsDetailLoader,
    productsDetailError: state.productsDetailError
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: () => dispatch(productAction.getProductDetail()),
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(Home);