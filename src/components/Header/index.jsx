import "./styles.css";

export default function Header({ navState, logo, children }) {
  const handleLink = (event) => {
    event.preventDefault();
    console.log("Link clicado!");
    console.log("URL:", event.target.href);
  };

  return (
    <header>
      <img src={logo} alt="rocketseat-logo" />

      <nav id="navbar" className={navState ? "active" : "hidden"}>
        <ul>
          <li>
            <a href="/home" className="active" onClick={handleLink}>
              Home
            </a>
          </li>
          <li>
            <a href="/menu" onClick={handleLink}>
              Menu
            </a>
          </li>
          <li>
            <a href="/recompensas" onClick={handleLink}>
              Recompensas
            </a>
          </li>
          <li>
            <a href="/git-cards" onClick={handleLink}>
              Gift Cards
            </a>
          </li>
          <li>
            <a href="/Lojas" onClick={handleLink}>
              Lojas
            </a>
          </li>
        </ul>
      </nav>

      {children}
    </header>
  );
}
