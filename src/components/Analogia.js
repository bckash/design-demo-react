
import NavSmall2 from "./NavSmall2"
import analog from "./img/analogia/analogia_ec.png"
import Description from "./Description"

const Analogia = () => {

  const descAnalogia = (
    <p>
      Cover for "Analogia" debut album, with wholesale distribution in Poland. Co-designed Layout, made by <a href="http://www.forinstudio.com/">Forin</a>.
    </p>
  )

  return (
    <section className="menu-title__cont">

            <NavSmall2/>
            <Description desc={descAnalogia} />

            {/* <!-- photo --> */}
            <section className="img__cont">
                <img className="images" src={analog} alt=""/>
            </section>
    </section>
  )
}
export default Analogia