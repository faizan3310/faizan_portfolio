import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="App-header">
            <h3>Fresh Mart</h3> 
            <Link to = "/login">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Header;