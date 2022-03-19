
import { Link } from "react-router-dom";

const NavSmall = () => {
  return (
    <div className="list-2">

        <Link to="/doddesign">
            <button className="option-design" title="design">
                <span className="material-icons">
                    architecture
                </span>
            </button>
        </Link>

        <Link to="/dodwhite">
            <button className="option-white" title="white"></button>
        </Link>

        <Link to="/dodblack">
            <button className="option-black" title="black"></button>
        </Link>

        <Link to="/doddetail">
            <button className="option-design" title="detail">
                <span className="material-icons">
                    bookmark_border
                </span>
            </button>
        </Link>

    </div>
  )
}
export default NavSmall;