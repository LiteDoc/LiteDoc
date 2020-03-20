import React from "react";
import styled from "styled-components";
import {
  convertFromRaw,
  convertToRaw,
  CompositeDecorator,
  ContentState,
  Editor,
  EditorState
} from "draft-js";

const SEditor = styled.div``;

SEditor.Container = styled.div`
  border: 0.5px dotted red;
  cursor: text;
  min-height: 80;
  padding: 10;
`;

class DraftEditor extends React.Component {
  constructor(props) {
    super(props);

    const content = ContentState.createFromText(this.props.register.field0);
    const editorState = EditorState.createWithContent(content);
    this.props.updateRegister(
      this.props.registerID,
      this.editorStateToStr(editorState)
    );
    // this.state = {
    //   editorState: EditorState.createWithContent(content)
    // };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      this.props.updateRegister(this.props.registerID, "test");
      // this.setState({ editorState: editorState });
    };
  }

  editorStateToStr = editorState => {
    console.log(editorState);
    return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  };

  strToEditorState = strContent => {
    return EditorState.createWithContent(
      convertFromRaw(JSON.parse(strContent))
    );
  };

  render() {
    return (
      <SEditor>
        <SEditor.Container onClick={this.focus}>
          <Editor
            // editorState={EditorState.createEmpty()}
            editorState={this.strToEditorState(this.props.register.field0)}
            onChange={this.onChange}
            ref="editor"
          />
        </SEditor.Container>
      </SEditor>
    );
  }
}

export { DraftEditor };
