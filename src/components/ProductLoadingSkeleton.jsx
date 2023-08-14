const ProductLoadingSkeleton = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{Array(20)
				.fill()
				.map((_, idx) => (
					<div key={idx} className="rounded-lg overflow-hidden p-4">
						{/* Image Placeholder */}
						<div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
						{/* Title Placeholder */}
						<div className="w-3/4 h-6 mt-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
						{/* Price Placeholder */}
						<div className="w-1/2 h-5 mt-2 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
					</div>
				))}
		</div>
	);
};

export default ProductLoadingSkeleton;
