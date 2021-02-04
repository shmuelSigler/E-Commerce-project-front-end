import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import productsObj from "./productsObj.js"
import "./product.css"


export default class Product extends Component {
    render() {
        return (
        
            
            <div className="singleProduct col-lg-4 col-md-6 ">
                <figure className="">
                    <div className="image">
                        <Link to={"/product/" + this.props.title}>
                            <img className="img-fluid " src={this.props.src}   alt={this.props.title} />
                        </Link>
                    </div>
                    
                    <figcaption>
                        <h3 className="font-weight-bolder">{this.props.title}</h3>
                        <span>{this.props.rating}</span><br/>
                        <span><b>${this.props.price}</b></span><br/>
                        <span>{this.props.description}</span>
                    </figcaption>
                    <button  className="btn btn-primary">Add To Cart</button>
                </figure>
            </div>
        )
    }
}
