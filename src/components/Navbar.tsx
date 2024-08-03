"use client";
import Link from "next/link";
import React from "react";
import { MoveRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar() {
	const [isToggle, setIsToggle] = React.useState(false);
	const onToggle = () => {
		setIsToggle(!isToggle);
	};

	return (
		<>
			<nav className='w-full flex flex-row items-center bg-transparent absolute py-4 lg:py-0 z-30 top-0 px-2 lg:absolute lg:top-0 lg:z-50 justify-between lg:px-8'>
				<div className="flex gap-12 justify-center items-center">
					<img src="/Smartworka.svg" alt="logo" />
					<ul className="flex-row space-x-6 justify-between py-6 text-white font-semibold text-base hidden lg:flex">
						<li className="text-white font-semibold hover:text-blue-600">
							<Link href="#about" legacyBehavior>
								<a>About</a>
							</Link>
						</li>
						<li className="text-white font-semibold hover:text-blue-600">
							<Link href="#features" legacyBehavior>
								<a>Features</a>
							</Link>
						</li>
						<li className="text-white font-semibold hover:text-blue-600">
							<Link href="#works" legacyBehavior>
								<a>How it Works</a>
							</Link>
						</li>
						<li className="text-white font-semibold hover:text-blue-600">
							<Link href="#contact" legacyBehavior>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</div>
				<button
					onClick={onToggle}
					className="lg:hidden "
					aria-label="Toggle navigation menu"
				>
					<Menu className="text-2xl" />
				</button>
			</nav>

			<nav
				className={`bg-[#051537] h-full absolute w-full z-40 rounded-md lg:hidden px-2 py-4 bottom-4 ${
					isToggle ? "block" : "hidden"
				}`}
			>
				<div className="flex flex-row justify-between">
					<img src="/Smartworka.svg" alt="logo" />
					<button
						className="p-4"
						onClick={onToggle}
						aria-label="Close navigation menu"
					>
						<X className="text-2xl text-white" />
					</button>
				</div>

				<ul className="space-x-4 flex lg:hidden flex-col gap-8 items-center text-white text-lg py-12">
					<li className="text-white font-semibold hover:text-blue-600">
						<Link href="#about" legacyBehavior>
							<a>About</a>
						</Link>
					</li>
					<li className="text-white font-semibold hover:text-blue-600">
						<Link href="#features" legacyBehavior>
							<a>Features</a>
						</Link>
					</li>
					<li className="text-white font-semibold hover:text-blue-600">
						<Link href="#works" legacyBehavior>
							<a>How it Works</a>
						</Link>
					</li>
					<li className="text-white font-semibold hover:text-blue-600">
						<Link href="#contact" legacyBehavior>
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}