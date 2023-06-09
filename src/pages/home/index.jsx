import { useState } from "react";
import Header from "../../components/Header";
import rocketCoffee from "../../assets/rocket-coffee.png";
import desktopLogo from "../../assets/logo-desktop.svg";
import mobileLogo from "../../assets/logo-mobile.svg";
import burgerOpen from "../../assets/menu-buguer-open.svg";
import burgerClose from "../../assets/menu-buguer-close.svg";
import "../../styles/index.css";
import Button from "../../components/Button";

function Home() {
  const { width } = window.screen;
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Header navState={nav} logo={width <= 1024 ? mobileLogo : desktopLogo}>
        {width < 1024 ? (
          <img
            id="burger"
            src={nav ? burgerClose : burgerOpen}
            alt=""
            onClick={handleNav}
          />
        ) : (
          width >= 1024 && <Button id={"getmycoffee"} text={"Pegar meu café"} />
        )}
      </Header>

      <main id="menu">
        {width < 1024 ? (
          <div className="the-coffee">
            O café que fará seu código decolar para o próximo nível.
          </div>
        ) : null}

        {width < 1024 ? (
          <Button id={"getmycoffee"} text={"Pegar meu café"} />
        ) : null}

        <div className="title">
          <h1>Great Coffee</h1>
          <span className="great-coffee-span">&lsaquo;Great Code/&rsaquo;</span>
        </div>

        <img src={rocketCoffee} alt="" />
      </main>
    </>
  );
}

export default Home;
