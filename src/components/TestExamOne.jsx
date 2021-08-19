import { useState } from "react";
import { handleRemoveEleTags, countCharacterSameValue } from "../utils";
import Button from "./Button";
import HeaderTableRender from "./HeaderTableRender";
import EditorConvertToHTML from "./HTMLEditor";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentText = handleRemoveEleTags(value);
    setCharacterStatistics(countCharacterSameValue(contentText));
    setCountLetter(contentText.length);
  };
  const onChangeEditorHTML = (data) => {
    setValue(data);
  };
  return (
    <div className="content-left">
      <h2>Test 1</h2>
      <p>Tổng số kí tự: {countLetter}</p>
      <form onSubmit={handleSubmit}>
        <div className="editorConvert">
          <EditorConvertToHTML onChangeEditorHTML={onChangeEditorHTML} />
        </div>
        <Button type="submit" value="Submit" />
      </form>
      {value && (
        <Table>
          <HeaderTableRender headerKeys={headerKeys} />
          {renderTableData}
        </Table>
      )}
    </div>
  );
};

export default TestExamOne;
