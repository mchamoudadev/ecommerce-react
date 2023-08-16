import React, { useContext } from "react";
import { GoTrash } from "react-icons/go";
import Payments from "./Payments";
import useShop, { ShopContext } from "../ShopContext";

const CartItems = () => {
	const { products, updateProductQuantity, removeFromCart } = useShop();

	return (
		<div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
			{/* cart items section */}
			<div className="flex-1">
				<h2 className="text-2xl font-semibold mb-4">
					{products.length > 0
						? "Your cart items"
						: "Your cart is empty right now please go a head and add some items"}
				</h2>

				{products.map((product) => (
					<div className="flex items-start space-x-4 mb-6">
						<img
							className="w-24 h-24 object-cover rounded-lg"
							src={product.thumbnail}
							alt={product.title}
						/>

						{/* product info */}
						<div className="flex flex-col justify-between flex-1">
							<h3 className="text-lg font-semibold">{product.title}</h3>
							<div className="text-sm text-gray-500">{product.description}</div>
							{/* price ,quantity */}
							<div className="flex items-center justify-between mt-2">
								{/* price and quantity */}
								<div className="flex items-center space-x-2">
									{/* price */}
									<span className="text-lg text-pink-600 font-semibold">
										${product.price.toFixed()}
									</span>
									{/* quantity */}
									<div className="flex items-center space-x-2">
										<label htmlFor="" className="text-sm font-semibold">
											Quantity
										</label>
										<input
											onChange={(event) =>
												updateProductQuantity(product, event.target.value)
											}
											defaultValue={product.quantity}
											min={1}
											type="number"
											className="w-16 border  border-gray-200 rounded-md p-2 text-center"
										/>
									</div>
								</div>

								{/* delete button */}

								<button
									onClick={() => removeFromCart(product)}
									className="text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out">
									<GoTrash className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* payment */}
			<Payments />
		</div>
	);
};

export default CartItems;
