import "../styles/BannerComoSeVio.css";
import bbc from "../svg/Banner/bbc.svg";
import nyt from "../svg/Banner/nyt.svg";
export default function BannerComoSeVio() {
  return (
    <>
      <section className="container-banner">
        <h2>Como se vio en:</h2>
        <div className="container-empresas">
          <img src={bbc} alt="bbc-logo" />
          <img src={nyt} alt="nyt-logo" />
        </div>
      </section>
    </>
  );
}
