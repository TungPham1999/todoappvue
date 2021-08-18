import "./App.css";
import { useState, useEffect } from "react";
import {
  handleRemoveEleTags,
  countCharacterSameValue,
  sortAlphabetically,
  removeSignLetter,
} from "./utils";

function App() {
  const [value, setValue] = useState("");
  const [infomation, setInfomation] = useState({ fName: "", lName: "" });
  const [todos, setTodos] = useState([]);
  const [countLetter, setCountLetter] = useState(0);
  const [characterStatistics, setCharacterStatistics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const renderTableData = characterStatistics.map((item, index) => (
    <tr key={index}>
      <td>{item.key}</td>
      <td>{item.num}</td>
    </tr>
  ));

  const renderTableHeaderLetter = () => {
    const headerKeys = ["Number", "Count"];
    return headerKeys.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("data")) || []);
  }, [infomation]);

  useEffect(() => {
    if (searchTerm) {
      const results = todos.filter((name) =>
        removeSignLetter(name.fName)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setTodos(results);
    } else {
      setTodos(JSON.parse(localStorage.getItem("data")));
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentText = handleRemoveEleTags(value);
    setCharacterStatistics(countCharacterSameValue(contentText));
    setCountLetter(contentText.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfomation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitInfomation = (e) => {
    e.preventDefault();
    const dataNew = [...todos, infomation];
    localStorage.setItem("data", JSON.stringify(sortAlphabetically(dataNew)));
    setInfomation({ fName: "", lName: "" });
  };
  const renderTableHeaderInfo = () => {
    const headerKeys = ["Frist Name", "Last Name"];
    return headerKeys.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderTableDataInfo = todos.map((item, index) => (
    <tr key={index}>
      <td>{item.fName}</td>
      <td>{item.lName}</td>
    </tr>
  ));
  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="App">
      <div className="content-left">
        <h2>Test 1</h2>
        <div id="total-character">
          <h4>Tổng số kí tự: {countLetter}</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Enter a text …"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <table id="table-element">
          <tbody>
            <tr>{renderTableHeaderLetter()}</tr>
            {renderTableData}
          </tbody>
        </table>
      </div>
      <div className="content-right">
        <h2>Test 2</h2>
        <form
          onSubmit={handleSubmitInfomation}
          style={{ marginBottom: "20px" }}
        >
          <input
            type="text"
            value={infomation.fName}
            name="fName"
            placeholder="Enter a first name …"
            onChange={handleChange}
          />
          <input
            type="text"
            value={infomation.lName}
            placeholder="Enter a last name …"
            name="lName"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChangeSearch}
        />
        <table id="table-element">
          <tbody>
            <tr>{renderTableHeaderInfo()}</tr>
            {renderTableDataInfo}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
