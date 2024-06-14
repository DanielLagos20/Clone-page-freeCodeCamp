import "../styles/ContentStart.css";
import amazon from "../svg/Content-Start/amazon.svg";
import apple from "../svg/Content-Start/apple.svg";
import google from "../svg/Content-Start/google.svg";
import microsoft from "../svg/Content-Start/microsoft.svg";
import spotify from "../svg/Content-Start/spotify.svg";
import ButtonComenzar from "./ButtonComenzar";
import ContentImgStart from "../img/img-content-start.png";
export default function ContentStart() {
  return (
    <>
      <section className="container-start">
        <div className="container-text">
          <h2>Aprenda a codificar, gratis.</h2>
          <h2>Construir proyectos.</h2>
          <h2>Obtenga certificaciones.</h2>
          <p>
            Desde 2014, más de 40.000 graduados de freeCodeCamp.org han <br />
            conseguido trabajos en empresas de tecnología, entre ellas:
          </p>
        </div>
        <div className="container-company">
          <img src={apple} alt="apple-logo" style={{ width: "60px" }} />
          <img src={google} alt="apple-google" />
          <img src={microsoft} alt="microsoft-logo" />
          <img src={spotify} alt="spotify-logo" />
          <img src={amazon} alt="amazon-logo" style={{ paddingTop: "12px" }} />
        </div>
        <div className="container-button">
          <ButtonComenzar content="Comience (es gratis)" />
        </div>
        <div className="container-img">
          <img src={ContentImgStart} alt="img-students" />
          <blockquote>
            Estudiantes de freeCodeCamp en un grupo de estudio local en Corea
            del Sur.
          </blockquote>
        </div>
      </section>
    </>
  );
}
