import Link from "next/link"

export default function Navbar(){
	return (
		<div className="navbar">
			<div className="title-navbar">
				To-Do App
			</div>
			<ul className="ul-navbar">
		        	<li className="li-navbar">
		                	<a href="/" className="link-navbar">Home</a>
		                </li>
		                <li className="li-navbar">
		                	<a href="/login" className="link-navbar">Log in</a>
		                </li>
		                <li className="li-navbar">
		                	<a href="/signup" className="link-navbar">Sign up</a>
		                </li>
			</ul>

		</div>
  	)
}
