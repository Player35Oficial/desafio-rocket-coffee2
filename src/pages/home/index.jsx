import Header from "../../components/Header";
import rocketCoffee from "../../assets/rocket-coffee.png";
import desktopLogo from "../../assets/logo-desktop.svg";
import "../../styles/index.css";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <Header logo={desktopLogo}>
        <Button id={"getmycoffee"} text={"Pegar meu café"} />
      </Header>

      <main>
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
