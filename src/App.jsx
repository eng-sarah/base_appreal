import "./App.css";

function App() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className=" flex flex-col items-start ">
				<div className="container mt-[28px] ml-[20px] lg:mt-[61px] lg:ml-[62px] xl:ml-[161px]  w-[133px]">
					<div className="mb-[25px] lg:mb-[80px]  ">
						<img
							src="/src/assets/images/logo.svg"
							alt="logo"
							className="object-contain  h-auto "
						/>
					</div>
				</div>
				<div className="container mt-[25px]  lg:hidden  ">
					<img
						src="/src/assets/images/hero-mobile.jpg"
						alt="hero"
						className="max-w-full w-screen"
					/>
				</div>
				<div className="container mt-[28px] lg:mt-[50px] lg:ml-[62px] xl:ml-[161px]">
					<div className="lg:justify-center text-center lg:text-start  lg:w-[420px] ">
						<h1 className="max-w-full tracking-[23px] font-semibold text-4xl lg:text-7xl text-[#433b3b] mb-[20px]  raleway-header">
							<span className="text-[#daa9af] tracking-[15px] font-[400] ">
								WE'RE
							</span>{" "}
							<br />
							COMING <br /> SOON
						</h1>
						<p className="text-[#daa9af]  max-w-full  font-medium open-sans-body p-[12px]">
							hello fellow shoppers! we're currently building our new fashion
							store.Add your email below to stay up to date with anuncements and
							our launch deals .
						</p>
					</div>
					<div className="container ">
						<form
							className="flex flex-wrap relative mt-[40px] mx-auto lg:w-[420px] mb-[10px]"
							noValidate
						>
							<input
								type="email"
								className="peer border rounded-[200px] w-full h-[50px] border-[#e8dedf] pl-[20px] placeholder-[#e8dedf] invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#ff6769] invalid:[&:not(:placeholder-shown):not(:focus)]:border-2"
								placeholder="Email Address"
							/>
							<span className=" absolute right-[120px] hidden top-[12px] peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
								<img
									src="../src/assets/images/icon-error.svg"
									alt="submit"
									className="m-auto"
								/>
							</span>

							<button
								type="submit"
								className="bg-gradient-to-r from-[#eebabe] to-[#ee9b97]  rounded-[25px] w-[100px] h-[50px] absolute right-[0px] "
							>
								<img
									src="../src/assets/images/icon-arrow.svg"
									alt="submit"
									className="m-auto"
								/>
							</button>
							<span className="mt-2 pl-4 hidden font-semibold text-sm text-[#db7e86] peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
								Please provide a valid email
							</span>
						</form>
					</div>
				</div>
			</div>
			<div className="relative">
				<div className=" h-screen absolute  top-[55px] lg:top-0 right-0 hidden lg:block">
					<img
						src="/src/assets/images/hero-desktop.jpg"
						alt="hero"
						className="max-w-full object xl:max-h-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
