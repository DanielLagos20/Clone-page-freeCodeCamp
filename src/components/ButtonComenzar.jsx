import "../styles/ButtonComenzar.css";
export default function ButtonComenzar(props) {
  const { content } = props;
  return (
    <>
      <button className="button-comenzar">{content}</button>
    </>
  );
}
