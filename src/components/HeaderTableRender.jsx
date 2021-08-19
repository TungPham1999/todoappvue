const HeaderTableRender = (props) => {
  const { headerKeys } = props;
  return (
    <tr>
      {headerKeys.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      })}
    </tr>
  );
};

export default HeaderTableRender;
