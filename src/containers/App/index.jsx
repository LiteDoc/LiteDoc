import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "utils";
import { MenuBar, ToolBar, CollabEditor } from "containers";
import UserChip from "./UserChip";

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
  const [userChips, setUserChips] = useState([{ name: "Roger", location: 0 }]);

  const renderedUserChips = userChips.map(chip => {
    return <UserChip userChip={chip} />;
  });
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <MenuBar />
        <ToolBar />
        <div style={{ marginTop: "125px" }} />
        <SPaperC>
          <CollabEditor userChips={userChips} setUserChips={setUserChips} />
        </SPaperC>
        <div>{renderedUserChips}</div>
      </div>
    </React.Fragment>
  );
}

export { App };
