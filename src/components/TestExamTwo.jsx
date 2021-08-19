import { useState, useEffect } from "react";
import {
  sortAlphabetically,
  removeSignLetter,
  filterSearchAdvance,
} from "../utils";
import Input from "./Input";
import Button from "./Button";
import HeaderTableRender from "./HeaderTableRender";
import Table from "./Table";

const TestExamTwo = () => {
  const [infomation, setInfomation] = useState({ fName: "", lName: "" });
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
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
    setIsShowForm(false);
  };
  const addRecord = () => {
    setSearchTerm("");
    setIsShowForm(true);
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
  const renderTable = () => {
    if (todos && todos.length) {
      return (
        <Table>
          <HeaderTableRender headerKeys={headerKeys} />
          {renderTableDataInfo}
        </Table>
      );
    } else {
      return <p className="noData">No data here</p>;
    }
  };
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("data")) || []);
  }, [infomation]);

  useEffect(() => {
    const dataDefault = JSON.parse(localStorage.getItem("data"));
    if (searchTerm && dataDefault && dataDefault.length) {
      const results = dataDefault.filter((name) =>
        filterSearchAdvance(
          removeSignLetter(name.lName.concat(name.fName).replace(/ /g, "")),
          removeSignLetter(searchTerm)
        )
      );
      setTodos(results);
    } else {
      setTodos(JSON.parse(localStorage.getItem("data")));
    }
  }, [searchTerm]);
  return (
    <div className="content-right">
      <div className="header--wrapper">
        <Input
          type="text"
          placeholder="Search"
          name="search"
          searchTerm={searchTerm}
          onInputChange={handleChangeSearch}
        />
        {!isShowForm && (
          <Button type="button" value="Add" clickAction={addRecord} />
        )}
      </div>
      {isShowForm && (
        <form
          onSubmit={handleSubmitInfomation}
          style={{ marginBottom: "20px" }}
        >
          <div className="input-group">
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
          </div>
          <Button type="submit" value="Submit" />
        </form>
      )}
      {renderTable()}
    </div>
  );
};

export default TestExamTwo;
