
import wfd1 from "./img/wfd/pl1.jpg"
import wfd2 from "./img/wfd/pl2.png"
import Description from "./Description"
import NavSmall2 from "./NavSmall2"

const Wfd = () => {

    const descWfd = (
        <p>Co-designed poster for rap-concert in Gdansk, Poland.</p>
    )

  return (
    <section className=" menu-title__cont">

        <NavSmall2 />
        <Description desc={descWfd} />

        {/* <!-- photo --> */}
        <section className="img__cont">
            <img className="images" src={wfd1} alt=""/>
            <img className="images" src={wfd2} alt=""/>
        </section>
    </section>
  )
}
export default Wfd