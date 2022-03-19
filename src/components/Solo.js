
import Description from "./Description"
import pdec1 from "./img/pdec/pdec1.png"
import pdec2 from "./img/pdec/pdec2.png"
import pdec3 from "./img/pdec/pdec3.png"
import NavSmall2 from "./NavSmall2"

const Solo = () => {

    const descSolo = (
        <p>Cover for "Kaszalot" solo album, relased independently. Designed layout & directed production.</p>
    )

  return (
    <section className=" menu-title__cont">

        <NavSmall2 />
        <Description desc={descSolo} />

        {/* <!-- photo --> */}
        <section className="img-pdec__cont">
            <img className="images-pdec" src={pdec1} alt=""/>
        </section>
        <section className="img-pdec__cont">
            <img className="images-pdec" src={pdec2} alt=""/>
        </section>
        <section className="img-pdec2__cont">
            <img className="images-pdec2" src={pdec3} alt=""/>
        </section>
    </section>
  )
}
export default Solo