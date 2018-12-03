import React, { Component } from 'react';
import './index.css'
import jsonResponse from './../../assets/item-data';
import Crousel from './Crousel'
import Reviews from './Reviews'
import GridTwo from './GridTwo'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: jsonResponse.CatalogEntryView[0]
        }
        console.log(jsonResponse)
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

export default Home;