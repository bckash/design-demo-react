
import logo1 from "./img/logo.svg"

const Footer = () => {
  return (
    <footer>
        <div>
          <p>04-22 | Kash</p>
        </div>
        <div>
          <p className="made-in">made with:</p>
          <img src={logo1} className="App-logo" alt="logo" />
        </div>
        
    </footer>
  )
}
export default Footer