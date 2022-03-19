
import './Nav.css';

const Nav = ( { val, nextTitle} ) => {

    const navData = [
        {id: 0, text: "DOD Wear"},
        {id: 1, text: "analogia"},
        {id: 2, text: "solo lp."},
        {id: 3, text: "BRG"},
        {id: 4, text: "bekart czwartki"},
        {id: 5, text: "WFD"},
        {id: 6, text: "Wl"}
    ]

    const length = navData.length;

    return (
        <nav>
        <div className="nav-up__cont">

            {/* hiden layout element */}
            <div className="nav-up--icon mq-fix-380">
            </div>

            {/* titles */}
            <ul className="nav-up--main">
                <li key="li1" className="um">
                    {navData.map((title, index) => {
                        return (
                            <div 
                                className={index === val ? "active" : "display-none"} key={title.id}>
                                {title.text}
                            </div>
                        )
                    })}
                </li>
            </ul>

            {/* chevron button */}
            <div className="nav-up--icon">
                <button onClick={() => nextTitle(length)} id="nav-up--but">
                    <span className="material-icons">
                        chevron_right
                    </span>
                </button>
            </div>
            
        </div>
        </nav>
  )
}
export default Nav