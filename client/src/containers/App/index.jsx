import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { GlobalStyle } from "utils";
import { MenuBar, ToolBar, CollabEditor } from "containers";
import UserChip from "./UserChip";
import { BasicEditor } from "components";

import io from "socket.io-client";

let names = ["Roger", "Lewis", "Haochen", "Sapta"];
let randName = names[Math.floor(Math.random() * names.length)];
const socketUrl = "localhost:4000";
const socket = io(socketUrl, {
  query: {
    name: randName
  }
});

const SPaperC = styled.div`
  .page-container {
    padding: 25px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.15);
    background-color: white;
    width: 800px;
    height: 1050px;
  }
  .page-number {
    display: block;
    text-align: center;
    margin-bottom: 25px;
  }
`;

function App() {
  const [userChips, setUserChips] = useState([{ name: "Roger", location: 0 }]);
  // const [pages, setPages] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [registers, setRegisters] = useState({
    1: { data: "test1" },
    2: { data: "test2" },
    3: { data: "test3" }
  });

  const updateRegister = (registerId, data) => {
    let newRegisters = { ...registers };
    newRegisters[registerId].data = data;
    setRegisters(newRegisters);
    console.log(registers);
  };

  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const getLocalRegisters = () => {
    return JSON.parse(localStorage.getItem("registers"));
  };

  const setLocalRegisters = (registerId, data) => {
    let newRegisters = getLocalRegisters();
    newRegisters[registerId].data = data;
    localStorage.setItem("registers", JSON.stringify(newRegisters));
    socket.emit("clientUpdateRegisters");
  };

  const renderUserChips = userChips.map(chip => {
    return <UserChip userChip={chip} />;
  });

  useEffect(() => {
    // let resetRegisters = {
    //   1: { data: "test1" },
    //   2: { data: "test2" },
    //   3: { data: "test3" }
    // };
    // localStorage.setItem("registers", JSON.stringify(resetRegisters));

    socket.on("serverUpdateRegisters", () => {
      forceUpdate();
    });
  }, [forceUpdate]);

  const renderPages = Object.keys(getLocalRegisters()).map(registerId => {
    return (
      <SPaperC key={registerId}>
        <div className="page-container">
          <BasicEditor
            registerId={registerId}
            register={getLocalRegisters()[registerId]}
            updateRegister={setLocalRegisters}
          />
          {/* <CollabEditor
            pageId={registerId}
            userChips={userChips}
            setUserChips={setUserChips}
          /> */}
        </div>
        <p className="page-number">{registerId}</p>
      </SPaperC>
    );
  });

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <MenuBar />
        <ToolBar />
        <div style={{ marginTop: "125px" }} />
        <div>{renderPages}</div>
        {/* <div>{renderUserChips}</div> */}
      </div>
    </React.Fragment>
  );
}

export { App };
