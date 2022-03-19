
import useNextTitle from "./components/useNextTitle";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dod from "./components/Dod";
import Analogia from "./components/Analogia";
import Solo from "./components/Solo";
import Brg from "./components/Brg";
import BekartCzwartek from "./components/BekartCzwartek";
import Wfd from "./components/Wfd";
import Footer from "./components/Footer";
import Wl from "./components/Wl";


function App() {

  const { val, nextTitle } = useNextTitle();

  return (
    <div className="App">
      <Header/>
      <Nav { ...{ val, nextTitle }} />
        <main>
          {val === 0 && <Dod />}
          {val === 1 && <Analogia />}
          {val === 2 && <Solo />}
          {val === 3 && <Brg />}
          {val === 4 && <BekartCzwartek />}
          {val === 5 && <Wfd />}
          {val === 6 && <Wl />}
        </main>
      <Footer />
    </div>
  );
}

export default App;
