import React, { Component} from 'react';
import { Nav, NavItem, NavLink } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import LevelOne from "./components/pages/level1page/levelPage";
import LevelTwo from "./components/pages/level2page/levelTwo";
import LevelThree from "./components/pages/level3page/levelThree";

export default class Example extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/levelOne/">LevelOne</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/levelTwo/">LevelTwo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/levelThree/">LevelThree</NavLink>
          </NavItem>
        </Nav>
        <Routes>
          <Route path="/levelOne" element={<LevelOne />} />
          <Route path="/levelTwo" element={<LevelTwo />} />
          <Route path="/levelThree" element={<LevelThree />} />
        </Routes>
      </div>
    );
  }
}
