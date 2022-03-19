

import brg from "./img/brg/brg.png"
import NavSmall2 from "./NavSmall2"
import Description from "./Description"

const Brg = () => {

    const descBrg = (
        <p>
            Cover for "DOD" album, with wholesale distribution in Poland. Co-designed & co-produced layout.
        </p>
    )

  return (
    <section className=" menu-title__cont">
        <NavSmall2 />
        <Description desc={descBrg} />

        {/* <!-- photo --> */}
        <section className="img__cont">
            <img className="images" src={brg} alt=""/>
        </section>
    </section>
  )
}
export default Brg