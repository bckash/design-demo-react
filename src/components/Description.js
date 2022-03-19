
import InfoIcon from "./InfoIcon";

const Description = ({desc}) => {
  return (
    <section className="description__cont">
    <InfoIcon />
    {desc}
  </section>
  )
}
export default Description;