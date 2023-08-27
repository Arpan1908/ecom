import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RindexeleteBin6Line} from 'react-icons/ri'
import "./Cart.css"

function Cart({
    visibility,
    items,
    productRemove,
    close,
    quantityChange
}) {

  return (
    <div
			className="modal"
			style={{
				display: visibility
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn close-btn"
						onClick={close}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-items">
					{items.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{items.map((product) => (
						<div
							className="cart-product"
							key={product.index}>
							<img
								src={
									product.image
								}
								alt={product.title}
							/>
							<div className="product-info">
								<h3>
									{product.title}
								</h3>
								<span className="product-price">
									{product.price *
										product.count}
									$
								</span>
							</div>
							<select
								className="count"
								value={
									product.count
								}
								onChange={(
									event
								) => {
									quantityChange(
										product.index,
										event
											.target
											.value
									);
								}}>
								{[
									...Array(
										10
									).keys(),
								].map(
									(number) => {
										const num =
											number +
											1;
										return (
											<option
												value={
													num
												}
												key={
													num
												}>
												{
													num
												}
											</option>
										);
									}
								)}
							</select>
							<button
								className="btn remove-btn"
								onClick={() =>
									productRemove(
										product
									)
								}>
								<RindexeleteBin6Line
									size={20}
								/>
							</button>
						</div>
					))}
					{items.length > 0 && (
						<button className="btn checkout-btn">
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
  )
}

export default Cart