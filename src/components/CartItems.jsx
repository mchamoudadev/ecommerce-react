import React from "react";
import { GoTrash } from "react-icons/go";
import Payments from "./Payments";

const CartItems = () => {
	const products = [
		{
			id: 1,
			title: "iPhone 9",
			description: "An apple mobile which is nothing like apple",
			price: 549,
			discountPercentage: 12.96,
			rating: 4.69,
			stock: 94,
			brand: "Apple",
			category: "smartphones",
			thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
			images: [
				"https://i.dummyjson.com/data/products/1/1.jpg",
				"https://i.dummyjson.com/data/products/1/2.jpg",
				"https://i.dummyjson.com/data/products/1/3.jpg",
				"https://i.dummyjson.com/data/products/1/4.jpg",
				"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
			],
		},
		{
			id: 2,
			title: "iPhone X",
			description:
				"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
			price: 899,
			discountPercentage: 17.94,
			rating: 4.44,
			stock: 34,
			brand: "Apple",
			category: "smartphones",
			thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
			images: [
				"https://i.dummyjson.com/data/products/2/1.jpg",
				"https://i.dummyjson.com/data/products/2/2.jpg",
				"https://i.dummyjson.com/data/products/2/3.jpg",
				"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
			],
		},
		{
			id: 3,
			title: "Samsung Universe 9",
			description:
				"Samsung's new variant which goes beyond Galaxy to the Universe",
			price: 1249,
			discountPercentage: 15.46,
			rating: 4.09,
			stock: 36,
			brand: "Samsung",
			category: "smartphones",
			thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
		},
	];

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
											type="number"
											className="w-16 border  border-gray-200 rounded-md p-2 text-center"
										/>
									</div>
								</div>

								{/* delete button */}

								<button className="text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out">
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
