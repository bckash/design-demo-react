
import Description from "./Description"
import wl1 from "./img/wl/ctibs.png"
import wl2 from "./img/wl/drqa.png"
import wl3 from "./img/wl/grid.PNG"
import wl4 from "./img/wl/sbulk.png"
import wl5 from "./img/wl/water.png"
import NavSmall2 from "./NavSmall2"

const Wl = () => {

    const descWl = (
        <p>
            Promotional content, illustrating series of projects for work-flow improvement. Graphic design is made by "remixing" existing themes and putting inside the design key words for the projects. 
        </p>
    )

  return (
    <section className=" menu-title__cont">

        <NavSmall2 />
        <Description desc={descWl} />

        {/* <!-- photo --> */}
        <section className="img__cont">
                <img className="images" src={wl3} alt=""/>
        </section>
        <section className="img-pdec__cont">
            <img className="images-pdec" src={wl5} alt=""/>
        </section>
        <section className="img__cont">
                <img className="images" src={wl1} alt=""/>
        </section>
        <section className="img-pdec__cont">
            <img className="images-pdec" src={wl2} alt=""/>
        </section>
        <section className="img__cont">
                <img className="images" src={wl4} alt=""/>
        </section>
    </section>
  )
}
export default Wl