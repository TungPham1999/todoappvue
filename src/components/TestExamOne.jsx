import { useState } from "react";
import { handleRemoveEleTags, countCharacterSameValue } from "../utils";
import Input from "./Input";
import Button from "./Button";
import HeaderTableRender from "./HeaderTableRender";
import Table from "./Table";

const TestExamOne = () => {
  const [value, setValue] = useState("");
  const [countLetter, setCountLetter] = useState(0);
  const [characterStatistics, setCharacterStatistics] = useState([]);
  const headerKeys = ["Number", "Count"];

  const renderTableData = characterStatistics.map((item, index) => (
    <tr key={index}>
      <td>{item.key}</td>
      <td>{item.num}</td>
    </tr>
  ));

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const contentText = handleRemoveEleTags(value);
    setCharacterStatistics(countCharacterSameValue(contentText));
    setCountLetter(contentText.length);
  };
  return (
    <div className="content-left">
      <h2>Test 1</h2>
      <div id="total-character">
        <h4>Tổng số kí tự: {countLetter}</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          placeholder="Enter a text …"
          onInputChange={handleChange}
        />
        <Button type="submit" value="Submit" />
      </form>
      <Table>
        <HeaderTableRender headerKeys={headerKeys} />
        {renderTableData}
      </Table>
    </div>
  );
};

export default TestExamOne;
