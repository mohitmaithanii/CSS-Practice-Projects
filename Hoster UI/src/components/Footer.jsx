const Footer = () => {
	return (
		<>
			<div className="flex flex-col gap-4 md:flex-row md:justify-between">
				<ul className="flex gap-6 text-gray-500 font-lato">
					<li className="hover:text-gray-800">
						<a href="#">Facebook</a>
					</li>
					<li className="hover:text-gray-800">
						<a href="#">Instagram</a>
					</li>
					<li className="hover:text-gray-800">
						<a href="#">Twitter</a>
					</li>
				</ul>
				<div className="flex gap-2 ">
					<img src="../assets/Help-Avatar.svg" alt="help" />
					<div className="">
						<p className="font-thin font-playfair ">Have any Questions?</p>
						<a href="#" className="font-medium font-lato">
							Talk to specialist
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
