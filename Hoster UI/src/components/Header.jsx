import { Menu } from "lucide-react";

const Header = () => {
	return (
		<>
			{/* navbar */}
			<div className="flex items-center justify-between ">
				{/* logo */}
				<div className="flex items-center justify-center gap-2">
					<img src="../assets/Logo.svg" alt="logo" />
					<button className="bg-gradient-to-r from-orange-400 to-red-400 text-sm text-white px-1.5 py-1.5 rounded-2xl font-medium">
						Hoster is hiring
					</button>
				</div>

				<ul className="items-center justify-between hidden gap-6 text-gray-500 lg:flex font-lato ">
					<li className="hover:text-gray-800">
						<a href="#">Plans</a>
					</li>
					<li className="hover:text-gray-800">
						<a href="#">Find Domain</a>
					</li>
					<li className="hover:text-gray-800">
						<a href="#">Why Hoster</a>
					</li>
				</ul>

				<div className="items-center justify-center hidden gap-6 lg:flex font-lato ">
					<a className="text-gray-500" href="#">
						Sign In
					</a>
					<button className="px-4 py-3 text-white bg-purple-500 rounded-md hover:bg-purple-700">
						Join Waitlist
					</button>
				</div>

				{/* bar */}
				<div className="lg:hidden">
					<Menu strokeWidth={2} />
				</div>
			</div>
		</>
	);
};

export default Header;
