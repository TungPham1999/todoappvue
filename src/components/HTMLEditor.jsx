import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorConvertToHTML = (props) => {
  const { onChangeEditorHTML } = props;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleChange = (editorState) => {
    setEditorState(editorState);
    onChangeEditorHTML(editorState.getCurrentContent().getPlainText());
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={handleChange}
      />
      <textarea
        className="demo-content"
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default EditorConvertToHTML;
