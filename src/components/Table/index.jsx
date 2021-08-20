import "./index.css";

const Table = ({ children }) => {
  return (
    <table id="table-element">
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table
