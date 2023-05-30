import desktopLogo from "../assets/logo-desktop.svg";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <img src={desktopLogo} alt="rocketseat-logo" />

      <nav id="navbar">
        <a href="/home">Home</a>
        <a href="/menu">Menu</a>
        <a href="/recompensas">Recompensas</a>
        <a href="/git-cards">Gift Cards</a>
        <a href="/Lojas">Lojas</a>
      </nav>
    </header>
  );
}
