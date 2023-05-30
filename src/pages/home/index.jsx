import Header from "../../components/Header";
import rocketCoffee from "../../assets/rocket-coffee.png";
import "../../styles/index.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="title">
          <h1>Great Coffee</h1>
          <span className="great-coffee-span">&lsaquo;Great Code/&rsaquo;</span>
        </div>

        {/* <div className="blur"></div> */}

        <img src={rocketCoffee} alt="" />
      </main>
    </>
  );
}

export default Home;
