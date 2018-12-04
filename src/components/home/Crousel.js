import React, { Component } from 'react';

class Crousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedImg: this.props.json.Images[0].PrimaryImage[0].image
        }
    }

    changeImage = (img) => {
        this.setState({ selectedImg: img.image })
    }
    render() {
        let { json } = this.props
        return (
            <div className="container">
                <p className="Blender-details">
                    {json.title}
                </p>
                <div className="mixer-blender">
                    <img className="d-block w-100" src={this.state.selectedImg} alt="Second slide" />
                </div>
                <p className="view-larger">
                    <img src={require('./../../assets/img/plus-zoom.png')} alt="plus-zoom" width="30px;" />
                    view larger
                  </p>
                <div className="container-fluid">
                    <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="9000">
                        <div className="carousel-inner row w-100 mx-auto" role="listbox">
                            {
                                json.Images[0].AlternateImages && json.Images[0].AlternateImages.map((img, i) => {
                                    return (
                                        <div onClick={() => this.changeImage(img)} className={i === 0 ? "carousel-item col-md-3 active" : "carousel-item col-md-3"}>
                                            <div className="panel panel-default">
                                                <div className="panel-thumbnail">
                                                    <div className="thumb mouse-pointer">
                                                        <img className="img-fluid mx-auto d-block" src={img.image} alt="slide 1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                        <i class="fa fa-angle-left custom" ></i>	
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                            {/* <span className="carousel-control-next-icon" aria-hidden="false"></span> */}
                            <i class="fa fa-angle-right custom" ></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crousel;