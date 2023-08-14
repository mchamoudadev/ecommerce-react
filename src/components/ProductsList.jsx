import React, { useEffect, useState } from "react";
import productsData from "../assets/productsData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";

export const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					"https://dummyjson.com/products?limit=100"
				);

				setProducts(data.products);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				console.log(e);
			}
		};
		fetchProducts();
	}, []);

	if (loading) return <ProductLoadingSkeleton />;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{products.length > 0 &&
				products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
		</div>
	);
};
