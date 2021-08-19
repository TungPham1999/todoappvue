const Button = (props) => {
  const { type, value } = props;
  return <button type={type}>{value}</button>;
};

export default Button
