import "./Header.scss";
import NavBar from "./NavBar.tsx";
import Logo from "./Logo.tsx";

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
