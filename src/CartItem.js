import React from "react"

function CartItem(){
    return(
           <div className="col-md-2" >
					<img src="" className="center-block"/>
					<h4 className="text-center">Navy Green Polo Shirt</h4>
					<hr></hr>
					<p className="text-center">$<b>10</b>.00</p>
					<p className="text-center-custom"> or 4 for $30.00</p>
					<button className="btn btn-default btn-block btn-cart">Add to cart</button>
			</div> 
    )
}
export default CartItem