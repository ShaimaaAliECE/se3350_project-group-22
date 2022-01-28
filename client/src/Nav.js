import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import LevelOne from "./LevelOne";
import LevelTwo from "./LevelTwo";
import LevelThree from "./LevelThree";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/LevelOne/">LevelOne</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LevelTwo/">LevelTwo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LevelOne/">LevelOne</NavLink>
          </NavItem>
        </Nav>
        <Routes>
          <Route path="/LevelOne" element={<LevelOne />} />
          <Route path="/LevelTwo" element={<LevelTwo />} />
          <Route path="/LevelThree" element={<LevelThree />} />
        </Routes>
      </div>
    );
  }
}
