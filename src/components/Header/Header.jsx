import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Personal Healthcare Companion</h1>
      </div>
    </header>
  );
};

export default Header;
