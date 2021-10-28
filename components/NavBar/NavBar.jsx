import React from "react";
import Image from 'next/image'
import SearchBar from "../SearchBar/SearchBar";
import { Container, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function NavBar(props) {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header position="left">
        <Image src="/logo.png" alt="Arkham Logo" width={72} height={16} />
        </Menu.Item>
        <Menu.Item header position="left">
          Cards
        </Menu.Item>
        <Menu.Item header position="right">
          <SearchBar props={props} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
