import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { GlobalStyle } from "utils";
import { MenuBar, ToolBar, CollabEditor } from "containers";
import UserChip from "./UserChip";
import OwnerBar from "./OwnerBar";
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
    background-color: ${props => (props.isLocked ? "#F0F0F0" : "white")};
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
  const [registers, setRegisters] = useState([]);
  const [name, setName] = useState(randName);

  // const updateRegister = (registerId, data) => {
  //   let newRegisters = { ...registers };
  //   newRegisters[registerId].data = data;
  //   setRegisters(newRegisters);
  //   console.log(registers);
  // };

  // const [, updateState] = React.useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  // const getLocalRegisters = () => {
  //   return JSON.parse(localStorage.getItem("registers"));
  // };

  // const setLocalRegisters = (registerId, data) => {
  //   let newRegisters = getLocalRegisters();
  //   newRegisters[registerId].data = data;
  //   localStorage.setItem("registers", JSON.stringify(newRegisters));
  //   socket.emit("clientUpdateRegisters");
  // };

  const writeToRegister = (registerId, data) => {};

  const lockRegister = registerId => {
    socket.emit("lockRegister", { name: name, registerId: registerId });
  };

  const unlockRegister = registerId => {
    socket.emit("unlockRegister", { name: name, registerId: registerId });
  };

  const renderUserChips = userChips.map(chip => {
    return <UserChip userChip={chip} />;
  });

  useEffect(() => {
    socket.emit("getRegisterUpdate");
    socket.on("registerUpdate", registers => {
      setRegisters(registers);
    });
  }, []);

  const renderPages = Object.keys(registers).map(registerId => {
    return (
      <SPaperC key={registerId} isLocked={registers[registerId].isLocked}>
        <OwnerBar
          name={name}
          registerId={registerId}
          register={registers[registerId]}
          lockRegister={lockRegister}
          unlockRegister={unlockRegister}
        />
        <div className="page-container">
          <BasicEditor
            registerId={registerId}
            register={registers[registerId]}
            updateRegister={writeToRegister}
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
        <h1>{name}</h1>
        <div style={{ marginTop: "125px" }} />
        <div>{renderPages}</div>
        {/* <div>{renderUserChips}</div> */}
      </div>
    </React.Fragment>
  );
}

export { App };
