import { useState, useEffect } from "react";
import { sortAlphabetically, removeSignLetter } from "../utils";
import Input from "./Input";
import Button from "./Button";
import HeaderTableRender from "./HeaderTableRender";
import Table from "./Table";

const TestExamTwo = () => {
  const [infomation, setInfomation] = useState({ fName: "", lName: "" });
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  const headerKeys = ["Frist Name", "Last Name"];
  const renderTableDataInfo =
    todos &&
    todos.length > 0 &&
    todos.map((item, index) => (
      <tr key={index}>
        <td>{item.fName}</td>
        <td>{item.lName}</td>
      </tr>
    ));
  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
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
  return (
    <div className="content-right">
      <h2>Test 2</h2>
      <form onSubmit={handleSubmitInfomation} style={{ marginBottom: "20px" }}>
        <Input
          type="text"
          placeholder="Enter text ..."
          name="fName"
          value={infomation.fName}
          onInputChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Enter text ..."
          name="lName"
          value={infomation.lName}
          onInputChange={handleChange}
        />
        <Button type="submit" value="Submit" />
      </form>
      <Input
        type="text"
        placeholder="Search"
        name="search"
        searchTerm={searchTerm}
        onInputChange={handleChangeSearch}
      />
      <Table>
        <HeaderTableRender headerKeys={headerKeys} />
        {renderTableDataInfo}
      </Table>
    </div>
  );
};

export default TestExamTwo;
