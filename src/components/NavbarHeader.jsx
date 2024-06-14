import "../styles/NavbarHeader.css";
import Logo from "../svg/FreeCodeCamp_logo.svg";
import LogoWorld from "../svg/Logo-World.svg";
export default function NavBarHeader() {
  return (
    <>
      <section className="container-navbar">
        <div className="container-input">
          <form className="search-form">
            <label htmlFor="search" className="search-icon"></label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search 10,700+ tutorials..."
            />
          </form>
        </div>
        <div className="container-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="container-links">
          <a href="#">
            <img
              src={LogoWorld}
              alt=""
              style={{ width: "22px", height: "auto", padding: "0" }}
            />
          </a>
          <a href="#">Menú</a>
          <a href="#">Iniciar sesión</a>
        </div>
      </section>
    </>
  );
}
