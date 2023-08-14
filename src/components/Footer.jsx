import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="py-8 mt-16 border-t border-gray-200">
			<div className="max-w-4xl mx-auto text-center">
				<p className="text-gray-600 font-light mb-2">
					Thanks for visiting this website
				</p>
				<p className="text-gray-800 font-semibold">
					Dugsiiye &copy; {currentYear}
				</p>
			</div>
		</div>
	);
};

export default Footer;
