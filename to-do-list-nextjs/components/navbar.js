import Link from "next/link"

export default function Navbar(){
	return (
		<>
			<ul className="ul-navbar">
				<li className="li-navbar">
					<Link href="/">Home</Link>
				</li>
				<li className="li-navbar">
					<Link href="/login">Log in</Link>
				</li>
				<li className="li-navbar">
					<Link href="/signup">Sign up</Link>
				</li>
			</ul>
		</>
  	)
}
