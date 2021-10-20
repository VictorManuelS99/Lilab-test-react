import { Component } from "react";
import { HeaderLetter, HeaderStyled, HeaderTitle } from "./Header.style";

export class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderTitle>
          LIL<HeaderLetter>A</HeaderLetter>B Red Social
        </HeaderTitle>
      </HeaderStyled>
    );
  }
}
