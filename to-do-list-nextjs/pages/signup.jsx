import Link from "next/link"
export default function home(){
 return (
        <>
                <ul>
                        <li>
                                <Link href="/">Home</Link>
                        </li>
                        <li>
                                <Link href="/login">Log in</Link>
                        </li>
                        <li>
                                <Link href="/signup">Sign up</Link>
                        </li>
                </ul>
        </>
  )
}

