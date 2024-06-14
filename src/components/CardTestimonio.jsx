import "../styles/CardTestimonio.css";
export default function CardTestimonio(props) {
  let { nombre, pais, profesion, testimonio, imagen, alt } = props;
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={imagen} alt={alt} />
        </div>
        <div className="testimonio">
          <h2>
            <b>{nombre}</b> en {pais}
          </h2>
          <h3>{profesion}</h3>
          <p>{testimonio}</p>
        </div>
      </div>
    </>
  );
}
