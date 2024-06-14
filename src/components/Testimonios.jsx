import "../styles/Testimonios.css";
import CardTestimonio from "./CardTestimonio";
import ButtonComenzar from "./ButtonComenzar";
import imageShawn from "../img/Shawn-testimonio.png";
import imageSarah from "../img/Sarah-testimonio.png";
import imageEmma from "../img/Emma-testimonio.png";

export default function Testimonios() {
  return (
    <>
      <section className="testimonios">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <div className="cards">
          <CardTestimonio
            nombre={"Shawn Wang"}
            pais={"Singapur"}
            profesion={"Ingeniero de software en Amazon"}
            testimonio={
              '"Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
            }
            imagen={imageShawn}
            alt={"img-shawn"}
          />
          <CardTestimonio
            nombre={"Sara Chima"}
            pais={"Nigeria"}
            profesion={"Ingeniera de software en ChatDesk"}
            testimonio={
              '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble"'
            }
            imagen={imageSarah}
            alt={"img-sarah"}
          />
          <CardTestimonio
            nombre={"Emma Bostian"}
            pais={"Suecia"}
            profesion={"Ingeniera de software en Spotify"}
            testimonio={
              '"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify."'
            }
            imagen={imageEmma}
            alt={"img-emma"}
          />
          <div>
            <ButtonComenzar content={"Comience (es gratis)"} />
          </div>
        </div>
      </section>
    </>
  );
}
