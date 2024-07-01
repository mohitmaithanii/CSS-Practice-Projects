const Body = () => {
	return (
		<>
			<div className="space-y-4 lg:flex ">
				<div className="flex items-center justify-center lg:flex-1 lg:order-2">
					<img
						src="../assets/Blue-Shape.svg"
						alt="1st"
						className="-rotate-[45deg] h-60 md:h-72 lg:h-[400px]0"
					/>
					<img
						src="../assets/Pink-Shape.svg"
						alt="2nd"
						className="absolute -rotate-[30deg] h-60 md:h-72 lg:h-[400px]"
					/>
					<img
						src="../assets/Purple-Shape.svg"
						alt="3rd"
						className="absolute -rotate-[15deg] h-60 md:h-72  lg:h-[400px]"
					/>
					<img
						src="../assets/Hero-Model.png"
						alt="hero"
						className="absolute h-60 md:h-72 lg:h-[400px]"
					/>
				</div>

				<div className="lg:flex-1 lg:order-1">
					<h1 className="text-5xl font-bold leading-tight font-playfair">
						Host your website in less than 5 minutes
					</h1>
					<p className="py-2 text-gray-500 font-lato ">
						With Hoster , get your website up and running in no less than 5
						minutes with the most competitive pricing packages available online.
					</p>
					<form action="" className="flex flex-col gap-4 py-2 md:flex-row">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="px-4 py-3 rounded-md placeholder:text-gray-500"
						/>
						<button className="px-4 py-3 text-white bg-purple-500 rounded-md hover:bg-purple-700">
							Join Waitlist
						</button>
					</form>

					<div className="flex gap-4 ">
						<img src="../assets/Checkmark.svg" alt="check" />
						<p className="text-gray-500 font-lato">
							No spam ,ever . Unsubscribe anytime
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
