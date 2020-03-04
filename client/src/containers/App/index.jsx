import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import io from "socket.io-client";

import styled from "styled-components";
import { GlobalStyle } from "utils";

import { MenuBar, ToolBar, CollabEditor } from "containers";
import UserChip from "./UserChip";
import OwnerBar from "./OwnerBar";
import { BasicEditor } from "components";

const SPaperC = styled.div`
  .page-container {
    padding: 25px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.15);
    background-color: ${props =>
      props.isOwner ? "white" : "rgb(225,225,225)"};
    width: 800px;
    height: 1050px;
  }
  .page-number {
    display: block;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const availableServers = [
  "http://localhost:4001",
  "http://localhost:4002",
  "http://localhost:4003"
];

function App() {
  // let names = ["Roger", "Lewis", "Haochen", "Sapta"];
  let names = ["Roger"];
  let randName = names[Math.floor(Math.random() * names.length)];

  const [proxyServer, setProxyServer] = useState(availableServers[0]);
  const [userChips, setUserChips] = useState([{ name: "Roger", location: 0 }]);
  const [registers, setRegisters] = useState([]);
  const [registerLocks, setRegisterLocks] = useState([]);
  const [name, setName] = useState(randName);

  const [_, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const readRegisters = async () => {
    const url = proxyServer + "/read";
    const res = await axios.get(url, {}, { withCredentials: true });
    let newRegisters = res.data;
    newRegisters.sort((a, b) => (a.y_id > b.y_id ? 1 : -1));
    setRegisters(newRegisters);
    console.log(newRegisters);
  };

  const readRegisterLocks = async () => {
    const url = proxyServer + "/readLocks";

    const res = await axios.get(url, {}, { withCredentials: true });
    const locks = Object.values(res.data);
    setRegisterLocks(locks);
  };

  const isOwner = registerIdx => {
    if (registerLocks.length == 0) return false;
    return registerLocks[registerIdx].Owner === name;
  };

  const writeToRegister = async (registerID, data) => {
    console.log(registerID);
    const url = proxyServer + "/write";
    const params = {
      name: name,
      registerID: registerID
    };
    const res = await axios.post(
      url,
      data,
      { params: params },
      { withCredentials: true }
    );
    await readRegisters();
  };

  const lockRegister = async registerID => {
    console.log(registerID);
    const url = proxyServer + "/lock";
    const params = {
      name: name,
      registerID: registerID
    };
    const res = await axios.get(
      url,
      { params: params },
      { withCredentials: true }
    );
    await readRegisterLocks();
    console.log(res.data);
  };

  const unlockRegister = async registerID => {
    const url = proxyServer + "/unlock";
    const params = {
      name: name,
      registerID: registerID
    };
    const res = await axios.get(
      url,
      { params: params },
      { withCredentials: true }
    );
    await readRegisterLocks();
    console.log(res.data);
  };

  const renderUserChips = userChips.map(chip => {
    return <UserChip userChip={chip} />;
  });

  const chooseProxy = async () => {
    let params = {
      name: name
    };

    let url = proxyServer + "/connect";

    const res = await axios.get(
      url,
      { params: params },
      { withCredentials: true }
    );
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await chooseProxy();
      await readRegisters();
      await readRegisterLocks();
    };
    fetchData();
  }, []);

  const renderPages = Object.keys(registers).map(registerIdx => {
    const registerID = registers[registerIdx].y_id;
    return (
      <SPaperC key={registerID} isOwner={isOwner(registerIdx)}>
        <OwnerBar
          name={name}
          registerID={registerID}
          register={registers[registerIdx]}
          isOwner={isOwner(registerIdx)}
          lockRegister={lockRegister}
          unlockRegister={unlockRegister}
        />
        <div className="page-container">
          <BasicEditor
            registerID={registerID}
            register={registers[registerIdx]}
            updateRegister={writeToRegister}
          />
          {/* <CollabEditor
            pageId={registerID}
            userChips={userChips}
            setUserChips={setUserChips}
          /> */}
        </div>
        <p className="page-number">{registerID}</p>
      </SPaperC>
    );
  });

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <MenuBar name={name} />
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
