import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <Link to="/" className="link home-link">Home</Link>
            <ul>
                <li>
                    <Link to="/login" className="link">Login</Link>
                </li>
                <li>
                    <Link to="/signup" className="link">Signup</Link>
                </li>
            </ul>
        </nav>
    )
}