import "./styles.css";

export default function Header({ logo, children }) {
  return (
    <header>
      <img src={logo} alt="rocketseat-logo" />

      <nav id="navbar">
        <ul>
          <li>
            <a href="/home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/recompensas">Recompensas</a>
          </li>
          <li>
            <a href="/git-cards">Gift Cards</a>
          </li>
          <li>
            <a href="/Lojas">Lojas</a>
          </li>
        </ul>
      </nav>

      {children}
    </header>
  );
}
