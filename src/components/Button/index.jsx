import "./index.css";
const Button = (props) => {
  const { type, value, clickAction } = props;
  return (
    <button type={type} onClick={clickAction}>
      {value}
    </button>
  );
};

export default Button;
