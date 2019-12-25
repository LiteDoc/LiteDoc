import React from "react";
import {
  convertFromRaw,
  convertToRaw,
  CompositeDecorator,
  ContentState,
  Editor,
  EditorState
} from "draft-js";
import rawContent from "utils/rawContent";

class CollabEditor extends React.Component {
  constructor(props) {
    super(props);

    const decorator = new CompositeDecorator([
      {
        strategy: getEntityStrategy("IMMUTABLE"),
        component: TokenSpan
      },
      {
        strategy: getEntityStrategy("MUTABLE"),
        component: TokenSpan
      },
      {
        strategy: getEntityStrategy("SEGMENTED"),
        component: TokenSpan
      }
    ]);

    const blocks = convertFromRaw(rawContent);

    this.state = {
      editorState: EditorState.createWithContent(blocks, decorator)
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });
    this.logState = () => {
      const content = this.state.editorState.getCurrentContent();
      console.log(convertToRaw(content));
    };
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Enter some text..."
            ref="editor"
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}

function getEntityStrategy(mutability) {
  return function(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(character => {
      const entityKey = character.getEntity();
      if (entityKey === null) {
        return false;
      }
      return contentState.getEntity(entityKey).getMutability() === mutability;
    }, callback);
  };
}

// function myBlockRenderer(contentBlock) {
//   const type = contentBlock.getType();
//   if (type === 'atomic') {
//     return {
//       component: MediaComponent,
//       editable: false,
//       props: {
//         foo: 'bar',
//       },
//     };
//   }
// }

const TokenSpan = props => {
  return (
    <span data-offset-key={props.offsetkey} style={styles.highlighted}>
      {props.children}
    </span>
  );
};

const styles = {
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10
  },
  highlighted: {
    backgroundColor: "rgba(204, 204, 255, 1.0)",
    zIndex: -1,
    padding: "20px"
    // border: "1px solid black"
  }
};

export { CollabEditor };
