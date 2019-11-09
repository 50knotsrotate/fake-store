import React from 'react'
import "../../boostrap.css";
import './item.css'

export default function Item(props) {
    return (
<div calss = 'card'>
            <img class="card-img-top item-img" src={props.img} alt="Card image cap" />
            <h1>Shoe</h1>
            <h5>$15.99</h5>
            <div className="btn btn-sm btn-info w-50">Add To Cart</div>
</div>
                
    )
}
