import "./GoBack.css";

export default function GoBack(props) {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <button className="GoBack" onClick={goBack}>
      🔙
    </button>
  );
}
