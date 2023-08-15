import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [product, setProduct] = useState(null);
	const [mainImage, setMainImage] = useState();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get(
					`https://dummyjson.com/products/${id}`
				);

				setProduct(data);
				setMainImage(data.thumbnail);
			} catch (e) {
				console.log(e);
			}
		};
		getProduct();
	}, [id]);

	if (!product) return <ProductDetailsSkeleton />;

	return (
		product && (
			<div className="p-4 md:p-8">
				<button
					onClick={() => navigate(-1)}
					className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow  hover:bg-pink-700 transition-colors duration-200">
					← Go Back
				</button>

				<h1 className="text-3xl font-bold mb-6">{product.title}</h1>

				<div className="md:flex">
					<div className="md:w-1/2 pr-4 mb-6 md:mb-0">
						<img
							className="w-full h-96 object-cover rounded-lg shadow-md"
							src={mainImage}
							alt={product.title}
						/>
						{/* image gallery  */}
						<div className="flex mt-4 space-x-2 overflow-x-auto">
							{product?.images?.map((image, idx) => (
								<img
									onClick={() => setMainImage(image)}
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
								{product.stock > 0
									? `${product.stock} in Stock`
									: "Out of stock"}
							</span>
						</div>
						<div className="mb-4">
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
		)
	);
};

export default ProductDetails;
