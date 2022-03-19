
import bc1 from "./img/bc/bc71.png"
import bc2 from "./img/bc/bc72.png"
import bc3 from "./img/bc/bc5.png"
import bc4 from "./img/bc/bc74.png"
import bc5 from "./img/bc/bc76.png"
import Description from "./Description"
import NavSmall2 from "./NavSmall2"

const BekartCzwartek = () => {

    const descBekart = (
        <p>
            Covers for series of audio/video singles (promotion for DOD / BRG Lp.)
        </p>
    )

  return (
    <section className=" menu-title__cont">

            <NavSmall2 />
            <Description desc={descBekart} />

            {/* <!-- photo --> */}
            <section className="img__cont">
                <img className="images-bc" src={bc1} alt=""/>
                <img className="images-bc" src={bc2} alt=""/>
                <img className="images-bc" src={bc3} alt=""/>
                <img className="images-bc" src={bc4} alt=""/>
                <img className="images-bc" src={bc5} alt=""/>
            </section>
        </section>
  )
}
export default BekartCzwartek