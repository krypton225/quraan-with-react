import { Link } from "react-router-dom";
import QuraanLogo from "../assets/images/logo.jpg"

function Logo() {
    return (
        <div className="app">
            <div className="container">
                <Link className="logo" to="/">
                    <img src={QuraanLogo} className="logo__img" draggable="false" alt="القُرءان الكريم" />
                </Link>
            </div>
        </div>
    )
}

export default Logo;
