import "./index.css";

const Input = (props) => {
  const { value, name, type, onInputChange, placeholder } = props;
  const handleChange = (e) => {
    e.preventDefault();
    onInputChange(e);
  };
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default Input;
