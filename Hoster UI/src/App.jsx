import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen gap-16 px-6 py-3 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 bg-[#fefae0]">
				<Header />
				<Body />
				<Footer />
			</div>
		</>
	);
}

export default App;
