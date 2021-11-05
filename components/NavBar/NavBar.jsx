import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Container, Menu } from "semantic-ui-react";
import SearchBar from "../SearchBar/SearchBar";
import "semantic-ui-css/semantic.min.css";

function NavBar(props) {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header position="left">
        <Link href="/">
          <Image src="/logo.png" alt="Arkham Logo" width={72} height={16} />
        </Link>
        </Menu.Item>
        <Link href="/cards">
          <Menu.Item header position="left">
          Cards
        </Menu.Item>
        </Link>
        <Menu.Item header position="right">
          <SearchBar props={props} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
