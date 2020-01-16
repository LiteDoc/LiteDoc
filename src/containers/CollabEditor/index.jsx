import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  convertFromRaw,
  convertToRaw,
  CompositeDecorator,
  ContentState,
  Editor,
  EditorState
} from "draft-js";
import rawContent from "utils/rawContent";

const SEditor = styled.div``;

SEditor.Container = styled.div`
  border: 0.5px dotted red;
  cursor: text;
  min-height: 80;
  padding: 10;
`;

class CollabEditor extends React.Component {
  constructor(props) {
    super(props);

    const content = convertFromRaw(rawContent);
    this.state = {
      editorState: EditorState.createWithContent(content)
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      const currentSelection = this.state.editorState.getSelection();
      const stateWithContentAndSelection = EditorState.forceSelection(
        editorState,
        currentSelection
      );

      this.setState({ editorState: stateWithContentAndSelection });
    };
  }

  blockRenderer = contentBlock => {
    const type = contentBlock.getType();
    if (type === "user") {
      return {
        component: HighlightedBlock,
        editable: true,
        props: this.props
      };
    }
  };

  render() {
    return (
      <SEditor>
        <SEditor.Container onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            blockRendererFn={this.blockRenderer}
            onChange={this.onChange}
            placeholder="Enter some text..."
            ref="editor"
          />
        </SEditor.Container>
      </SEditor>
    );
  }
}

const SHighlightedBlock = styled.div`
  display: inherit;
  border: solid 1px rgba(200, 200, 255, 0.75);
  background-color: rgba(200, 200, 255, 0.1);
  padding: 10px;
  border-radius: 3px;

  div {
    display: inline;
  }
`;

const HighlightedBlock = props => {
  const el = useRef(null);
  const text = props.block.text;
  const blockProps = props.blockProps;

  useEffect(() => {
    let userChips = [...blockProps.userChips];
    let position = el.current.getBoundingClientRect().y;
    userChips[0].location = position;
    blockProps.setUserChips(userChips);
  });

  return (
    <SHighlightedBlock ref={el}>
      <div>{text}</div>
    </SHighlightedBlock>
  );
};

export { CollabEditor };
