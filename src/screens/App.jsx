import React from "react";
import styled from "styled-components";
import "styles/App.css";
import { MenuBar, ToolBar, CollabEditor } from "components";

const SPaperC = styled.div`
  padding: 25px;
  margin: auto;
  border-radius: 25px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15);
  background-color: white;
  width: 800px;
  height: 1200px;
`;

function App() {
  return (
    <div className="App">
      <MenuBar />
      <ToolBar />
      <div style={{ marginTop: "125px" }} />
      <SPaperC>
        <CollabEditor />
      </SPaperC>
    </div>
  );
}

export default App;
