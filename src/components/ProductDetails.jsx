import React from "react";

const ProductDetails = () => {
	const product = {
		id: 1,
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		discountPercentage: 12.96,
		rating: 4.69,
		stock: 0,
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
	};

	return (
		<div className="p-4 md:p-8">
			<button className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow  hover:bg-pink-700 transition-colors duration-200">
				← Go Back
			</button>

			<h1 className="text-3xl font-bold mb-6">{product.title}</h1>

			<div className="md:flex">
				<div className="md:w-1/2 pr-4 mb-6 md:mb-0">
					<img
						className="w-full h-96 object-cover rounded-lg shadow-md"
						src={product.thumbnail}
						alt={product.title}
					/>
					{/* image gallery  */}
					<div className="flex mt-4 space-x-2 overflow-x-auto">
						{product.images.map((image, idx) => (
							<img
								className="w-24 object-cover h-24 rounded-lg shadow cursor-pointer"
								key={idx}
								src={image}
								alt={product.title}
							/>
						))}
					</div>
				</div>
				<div className="md:w-1/2 pl-4">
					<p className="text-gray-600 mb-4">{product.description}</p>
					<div className="flex justify-between items-center mb-4">
						<span className="text-pink-600 font-semibold text-2xl">
							${product.price.toFixed()}
						</span>
						<span className="text-sm text-gray-500">
							{product.stock > 0 ? `${product.stock} in Stock` : "Out of stock"}
						</span>
					</div>
					<div className="mt-4">
						<span className="text-yellow-500">
							{"★".repeat(Math.round(product.rating))}
						</span>
						<span className="text-gray-300">
							{"★".repeat(Math.round(5 - product.rating))}
						</span>
					</div>

					<button className="bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-900 transition-colors duration-200">
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
